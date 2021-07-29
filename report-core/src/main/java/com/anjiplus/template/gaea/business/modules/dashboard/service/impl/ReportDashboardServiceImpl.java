
package com.anjiplus.template.gaea.business.modules.dashboard.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.anji.plus.gaea.curd.mapper.GaeaBaseMapper;
import com.anji.plus.gaea.exception.BusinessExceptionBuilder;
import com.anji.plus.gaea.utils.GaeaAssert;
import com.anji.plus.gaea.utils.GaeaBeanUtils;
import com.anjiplus.template.gaea.business.code.ResponseCode;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.dto.ChartDto;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.dto.ReportDashboardDto;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.dto.ReportDashboardObjectDto;
import com.anjiplus.template.gaea.business.modules.dashboard.dao.ReportDashboardMapper;
import com.anjiplus.template.gaea.business.modules.dashboard.service.ChartStrategy;
import com.anjiplus.template.gaea.business.modules.dashboard.service.ReportDashboardService;
import com.anjiplus.template.gaea.business.modules.dashboard.util.DateUtil;
import com.anjiplus.template.gaea.business.modules.dashboardwidget.controller.dto.ReportDashboardWidgetDto;
import com.anjiplus.template.gaea.business.modules.dashboardwidget.controller.dto.ReportDashboardWidgetValueDto;
import com.anjiplus.template.gaea.business.modules.dashboard.dao.entity.ReportDashboard;
import com.anjiplus.template.gaea.business.modules.dashboardwidget.dao.entity.ReportDashboardWidget;
import com.anjiplus.template.gaea.business.modules.dashboardwidget.service.ReportDashboardWidgetService;
import com.anjiplus.template.gaea.business.modules.dataSet.controller.dto.DataSetDto;
import com.anjiplus.template.gaea.business.modules.dataSet.controller.dto.OriginalDataDto;
import com.anjiplus.template.gaea.business.modules.dataSet.service.DataSetService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author Raod
 * @desc ReportDashboard 大屏设计服务实现
 * @date 2021-04-12 14:52:21.761
 **/
@Service
//@RequiredArgsConstructor
public class ReportDashboardServiceImpl implements ReportDashboardService, InitializingBean, ApplicationContextAware {

    @Autowired
    private ReportDashboardMapper reportDashboardMapper;

    @Autowired
    private ReportDashboardWidgetService reportDashboardWidgetService;

    @Autowired
    private DataSetService dataSetService;

    private Map<String, ChartStrategy> queryServiceImplMap = new HashMap<>();
    private ApplicationContext applicationContext;

    @Override
    public GaeaBaseMapper<ReportDashboard> getMapper() {
        return reportDashboardMapper;
    }

    @Override
    public ReportDashboardObjectDto getDetail(String reportCode) {
        ReportDashboardObjectDto result = new ReportDashboardObjectDto();
        ReportDashboardDto reportDashboardDto = new ReportDashboardDto();
        ReportDashboard reportDashboard = this.selectOne("report_code", reportCode);
        if (null == reportDashboard) {
            return new ReportDashboardObjectDto();
        }
        GaeaBeanUtils.copyAndFormatter(reportDashboard, reportDashboardDto);

        List<ReportDashboardWidget> list = reportDashboardWidgetService.list(
                new QueryWrapper<ReportDashboardWidget>().lambda()
                        .eq(ReportDashboardWidget::getReportCode, reportCode)
                        .orderByAsc(ReportDashboardWidget::getSort)
        );
        List<ReportDashboardWidgetDto> reportDashboardWidgetDtoList = new ArrayList<>();
        list.forEach(reportDashboardWidget -> {
            ReportDashboardWidgetDto reportDashboardWidgetDto = new ReportDashboardWidgetDto();
            ReportDashboardWidgetValueDto value = new ReportDashboardWidgetValueDto();
            value.setSetup(StringUtils.isNotBlank(reportDashboardWidget.getSetup()) ? JSONObject.parseObject(reportDashboardWidget.getSetup()) : new JSONObject());
            value.setData(StringUtils.isNotBlank(reportDashboardWidget.getData()) ? JSONObject.parseObject(reportDashboardWidget.getData()) : new JSONObject());
            value.setPosition(StringUtils.isNotBlank(reportDashboardWidget.getPosition()) ? JSONObject.parseObject(reportDashboardWidget.getPosition()) : new JSONObject());
            value.setCollapse(StringUtils.isNotBlank(reportDashboardWidget.getCollapse()) ? JSONObject.parseObject(reportDashboardWidget.getCollapse()) : new JSONObject());

            //实时数据的替换
            analysisData(value);
            reportDashboardWidgetDto.setType(reportDashboardWidget.getType());
            reportDashboardWidgetDto.setValue(value);
            reportDashboardWidgetDto.setOptions(JSONObject.parseObject(reportDashboardWidget.getOptions()));
            reportDashboardWidgetDtoList.add(reportDashboardWidgetDto);
        });
        reportDashboardDto.setWidgets(reportDashboardWidgetDtoList);
        result.setDashboard(reportDashboardDto);
        result.setReportCode(reportCode);
        return result;
    }

    /***
     * 保存大屏设计
     *
     * @param dto
     */
    @Override
    @Transactional
    public void insertDashboard(ReportDashboardObjectDto dto) {
        String reportCode = dto.getReportCode();
        GaeaAssert.notEmpty(reportCode, ResponseCode.PARAM_IS_NULL, "reportCode");
        //查询ReportDashboard
        ReportDashboard reportDashboard = this.selectOne("report_code", reportCode);
        ReportDashboard dashboard = new ReportDashboard();
        GaeaBeanUtils.copyAndFormatter(dto.getDashboard(), dashboard);
        BeanUtils.copyProperties(dto.getDashboard(), dashboard);
        dashboard.setReportCode(reportCode);
        if (null == reportDashboard) {
            //新增
            this.insert(dashboard);
        } else {
            //更新
            dashboard.setId(reportDashboard.getId());
            this.update(dashboard);
        }

        //删除reportDashboardWidget
        reportDashboardWidgetService.delete(new QueryWrapper<ReportDashboardWidget>()
                .lambda().eq(ReportDashboardWidget::getReportCode, reportCode));
        List<ReportDashboardWidgetDto> widgets = dto.getWidgets();

        List<ReportDashboardWidget> reportDashboardWidgetList = new ArrayList<>();
        for (int i = 0; i < widgets.size(); i++) {
            ReportDashboardWidget reportDashboardWidget = new ReportDashboardWidget();
            ReportDashboardWidgetDto reportDashboardWidgetDto = widgets.get(i);
            String type = reportDashboardWidgetDto.getType();
            ReportDashboardWidgetValueDto value = reportDashboardWidgetDto.getValue();
            reportDashboardWidget.setReportCode(reportCode);
            reportDashboardWidget.setType(type);
            reportDashboardWidget.setSetup(value.getSetup() != null ? JSONObject.toJSONString(value.getSetup()) : "");
            reportDashboardWidget.setData(value.getData() != null ? JSONObject.toJSONString(value.getData()) : "");
            reportDashboardWidget.setPosition(value.getPosition() != null ? JSONObject.toJSONString(value.getPosition()) : "");
            reportDashboardWidget.setCollapse(value.getCollapse() != null ? JSONObject.toJSONString(value.getCollapse()) : "");
            reportDashboardWidget.setOptions(reportDashboardWidgetDto.getOptions() != null ? JSONObject.toJSONString(reportDashboardWidgetDto.getOptions()) : "");
            reportDashboardWidget.setEnableFlag(1);
            reportDashboardWidget.setDeleteFlag(0);
            reportDashboardWidget.setSort((long) (i + 1));
            reportDashboardWidgetList.add(reportDashboardWidget);
        }
        reportDashboardWidgetService.insertBatch(reportDashboardWidgetList);

    }

    @Override
    public Object getChartData(ChartDto dto) {
//        String chartType = dto.getChartType();
        DataSetDto setDto = new DataSetDto();
        setDto.setSetCode(dto.getSetCode());
        setDto.setContextData(dto.getContextData());
        OriginalDataDto result = dataSetService.getData(setDto);
        List<JSONObject> data = result.getData();
        //处理时间轴
        List<JSONObject> resultData = buildTimeLine(data, dto);
        return resultData;
//        return getTarget(chartType).transform(dto, result.getData());
    }

    public ChartStrategy getTarget(String type) {
        for (String s : queryServiceImplMap.keySet()) {
            if (s.contains(type)) {
                return queryServiceImplMap.get(s);
            }
        }
        throw BusinessExceptionBuilder.build(ResponseCode.RULE_CONTENT_NOT_EXIST);
    }

    @Override
    public void afterPropertiesSet() {
        Map<String, ChartStrategy> beanMap = applicationContext.getBeansOfType(ChartStrategy.class);
        //遍历该接口的所有实现，将其放入map中
        for (ChartStrategy serviceImpl : beanMap.values()) {
            queryServiceImplMap.put(serviceImpl.type(), serviceImpl);
        }
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }


    /**
     * 解析图层数据
     *
     * @param dto
     */
    public void analysisData(ReportDashboardWidgetValueDto dto) {
//        if (StringUtils.isBlank(reportDashboardWidgetDto.getSetCode())) {
//            return;
//        }
//        DataSetDto dto = new DataSetDto();
//        dto.setSetCode(reportDashboardWidgetDto.getSetCode());
//        if (reportDashboardWidgetDto.getContextData() != null && reportDashboardWidgetDto.getContextData().size() > 0) {
//            dto.setContextData(reportDashboardWidgetDto.getContextData());
//        }
//        OriginalDataDto data = dataSetService.getData(dto);
//        reportDashboardWidgetDto.setData(JSONObject.toJSONString(data.getData()));
    }


    public List<JSONObject> buildTimeLine(List<JSONObject> data, ChartDto dto) {
        Map<String, String> chartProperties = dto.getChartProperties();
        if (null == chartProperties || chartProperties.size() < 1) {
            return data;
        }
        Map<String, Object> contextData = dto.getContextData();
        if (null == contextData || contextData.size() < 1) {
            return data;
        }
        if (contextData.containsKey("startTime") && contextData.containsKey("endTime")) {
            dto.setStartTime(contextData.get("startTime").toString());
            dto.setEndTime(contextData.get("endTime").toString());
        }
        if (StringUtils.isBlank(dto.getStartTime()) || StringUtils.isBlank(dto.getEndTime())) {
            return data;
        }
        //获取时间轴字段和解析时间颗粒度
        chartProperties.forEach((key, value) -> {
            dto.setParticles(value);
            setTimeLineFormat(dto);
            if (StringUtils.isNotBlank(dto.getDataTimeFormat())) {
                dto.setTimeLineFiled(key);
                return;
            }
        });

        if (StringUtils.isBlank(dto.getDataTimeFormat())) {
            return data;
        }

        Date beginTime = DateUtil.parseHmsTime(dto.getStartTime());
        Date endTime = DateUtil.parseHmsTime(dto.getEndTime());
        SimpleDateFormat showFormat = new SimpleDateFormat(dto.getTimeLineFormat());
        SimpleDateFormat dataFormat = new SimpleDateFormat(dto.getDataTimeFormat());


        Calendar calendar = Calendar.getInstance();
        calendar.setTime(beginTime);

        Calendar calendarEnd = Calendar.getInstance();
        calendarEnd.setTime(endTime);

        List<String> timeLine = new ArrayList<>();
        List<String> dataTimeline = new ArrayList<>();
        timeLine.add(showFormat.format(calendar.getTime()));
        dataTimeline.add(dataFormat.format(calendar.getTime()));

        //添加时间轴数据
        while (true) {
            calendar.add(dto.getTimeUnit(), 1);
            timeLine.add(showFormat.format(calendar.getTime()));
            dataTimeline.add(dataFormat.format(calendar.getTime()));
            if (showFormat.format(calendar.getTime()).equals(showFormat.format(calendarEnd.getTime()))) {
                break;
            }
        }

        //根据时间轴生成对应的时间线，数据不存在，补数据
        List<JSONObject> result = new ArrayList<>();
        JSONObject jsonDemo = data.get(0);
        String timeLineFiled = dto.getTimeLineFiled();
        for (String dateFormat : dataTimeline) {
            boolean flag = true;
            for (JSONObject datum : data) {
                if (datum.containsKey(timeLineFiled) && datum.getString(timeLineFiled).equals(dateFormat)) {
                    result.add(datum);
                    flag = false;
                }
            }
            if (flag) {
                //补数据
                JSONObject json = new JSONObject();
                jsonDemo.forEach((s, o) -> {
                    if (s.equals(timeLineFiled)) {
                        json.put(timeLineFiled, dateFormat);
                    } else {
                        json.put(s, 0);
                    }
                });
                result.add(json);
            }

        }
        return result;
    }

    //设置时间格式
    private void setTimeLineFormat(ChartDto dto) {
        String particles = dto.getParticles();
        if ("xAxis-hour".equals(particles)) {
            dto.setDataTimeFormat("yyyy-MM-dd HH");
            dto.setTimeLineFormat("MM-dd HH");
            dto.setTimeUnit(Calendar.HOUR);
        } else if ("xAxis-day".equals(particles)) {
            dto.setDataTimeFormat("yyyy-MM-dd");
            dto.setTimeLineFormat("yyyy-MM-dd");
            dto.setTimeUnit(Calendar.DATE);
        } else if ("xAxis-month".equals(particles)) {
            dto.setDataTimeFormat("yyyy-MM");
            dto.setTimeLineFormat("yyyy-MM");
            dto.setTimeUnit(Calendar.MONTH);
        } else if ("xAxis-year".equals(particles)) {
            dto.setDataTimeFormat("yyyy");
            dto.setTimeLineFormat("yyyy");
            dto.setTimeUnit(Calendar.YEAR);
        }
    }
}
