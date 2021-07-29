package com.anjiplus.template.gaea.business.filter;


import com.alibaba.fastjson.JSONObject;
import com.anji.plus.gaea.bean.ResponseBean;
import com.anji.plus.gaea.cache.CacheHelper;
import com.anji.plus.gaea.utils.JwtBean;
import com.anjiplus.template.gaea.business.constant.BusinessConstant;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.regex.Pattern;

/**
 * 简单的鉴权
 * @author raodeming
 * @date 2021/6/24.
 */
@Component
@Order(Integer.MIN_VALUE + 99)
public class TokenFilter implements Filter {
    private static final Pattern PATTERN = Pattern.compile(".*().*");
    private static final String USER_GUEST = "guest";
    private static final String SLASH = "/";

    @Autowired
    private CacheHelper cacheHelper;
    @Autowired
    private JwtBean jwtBean;

    /** 跳过token验证和权限验证的url清单*/
    @Value("#{'${customer.skip-authenticate-urls}'.split(',')}")
    private List<String> skipAuthenticateUrls;
    private Pattern skipAuthenticatePattern;


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 生成匹配正则，跳过token验证和权限验证的url
        skipAuthenticatePattern = fitByList(skipAuthenticateUrls);
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String uri = request.getRequestURI();

        if (SLASH.equals(uri)) {
            response.sendRedirect("/index.html");
            return;
        }

        // 不需要token验证和权限验证的url，直接放行
        boolean skipAuthenticate = skipAuthenticatePattern.matcher(uri).matches();
        if (skipAuthenticate) {
            filterChain.doFilter(request, response);
            return;
        }

        //获取token
        String token = request.getHeader("Authorization");
        if (StringUtils.isBlank(token)) {
            error(response);
            return;
        }

        // 判断token是否过期
        String loginName = jwtBean.getUsername(token);
        String tokenKey = String.format(BusinessConstant.GAEA_SECURITY_LOGIN_TOKEN, loginName);
        String userKey = String.format(BusinessConstant.GAEA_SECURITY_LOGIN_USER, loginName);
        if (!cacheHelper.exist(tokenKey)) {
            error(response);
            return;
        }
        if (!cacheHelper.exist(userKey)) {
            error(response);
            return;
        }
        String gaeaUserJsonStr = cacheHelper.stringGet(userKey);

        // 延长有效期
        cacheHelper.stringSetExpire(tokenKey, token, 3600);
        cacheHelper.stringSetExpire(userKey, gaeaUserJsonStr, 3600);

        //在线体验版本
        if (USER_GUEST.equals(loginName)
                && !uri.endsWith("/dataSet/testTransform")
                && !uri.endsWith("/reportDashboard/getData")
                && !uri.startsWith("/dict")
        ) {
            //不允许删除
            String method = request.getMethod();
            if (HttpMethod.POST.name().equalsIgnoreCase(method)
                    || HttpMethod.PUT.name().equalsIgnoreCase(method)
                    || HttpMethod.DELETE.name().equalsIgnoreCase(method)
            ) {
                ResponseBean responseBean = ResponseBean.builder().code("50001")
                        .message("在线体验版本，不允许此操作。请自行下载本地运行").build();
                response.getWriter().print(JSONObject.toJSONString(responseBean));
                return;
            }
        }

        //执行
        filterChain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    /**
     * 根据名单，生成正则
     *
     * @param skipUrlList
     * @return
     */
    private Pattern fitByList(List<String> skipUrlList) {
        if (skipUrlList == null || skipUrlList.size() == 0) {
            return PATTERN;
        }
        StringBuffer patternString = new StringBuffer();
        patternString.append(".*(");

        skipUrlList.stream().forEach(url -> {
            patternString.append(url.trim());
            patternString.append("|");
        });
        if (skipUrlList.size() > 0) {
            patternString.deleteCharAt(patternString.length() - 1);
        }
        patternString.append(").*");

        return Pattern.compile(patternString.toString());
    }

    private void error(HttpServletResponse response) throws IOException {
        ResponseBean responseBean = ResponseBean.builder().code("50014").message("The Token has expired").build();
        response.getWriter().print(JSONObject.toJSONString(responseBean));
    }
}
