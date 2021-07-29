package com.anjiplus.template.gaea.business.util;

import com.alibaba.druid.pool.DruidDataSource;
import com.anjiplus.template.gaea.business.modules.dataSource.controller.dto.DataSourceDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by raodeming on 2021/3/18.
 */
@Slf4j
public class JdbcUtil {

    /**
     * 所有数据源的连接池存在map里
     */
    static Map<Long, DruidDataSource> map = new ConcurrentHashMap<>();

    public static DruidDataSource getJdbcConnectionPool(DataSourceDto dataSource) {
        if (map.containsKey(dataSource.getId())) {
            return map.get(dataSource.getId());
        } else {
            try {
                if (!map.containsKey(dataSource.getId())) {
                    DruidDataSource pool = new DruidDataSource();
                    pool.setUrl(dataSource.getJdbcUrl());
                    pool.setUsername(dataSource.getUsername());
                    pool.setPassword(dataSource.getPassword());
                    pool.setDriverClassName(dataSource.getDriverName());

                    //下面都是可选的配置
                    pool.setInitialSize(10);  //初始连接数，默认0
                    pool.setMaxActive(30);  //最大连接数，默认8
                    pool.setMinIdle(10);  //最小闲置数
                    pool.setMaxWait(2000);  //获取连接的最大等待时间，单位毫秒
                    pool.setPoolPreparedStatements(true); //缓存PreparedStatement，默认false
                    pool.setMaxOpenPreparedStatements(20); //缓存PreparedStatement的最大数量，默认-1（不缓存）。大于0时会自动开启缓存PreparedStatement，所以可以省略上一句代码
                    pool.setConnectionErrorRetryAttempts(0);
                    pool.setBreakAfterAcquireFailure(true);
                    map.put(dataSource.getId(), pool);
                    log.info("创建连接池成功：{}", dataSource.getJdbcUrl());
                }
                return map.get(dataSource.getId());
            } finally {
            }
        }
    }

    /**
     * 删除数据库连接池
     *
     * @param id
     */
    public static void removeJdbcConnectionPool(Long id) {
        try {
            DruidDataSource pool = map.get(id);
            if (pool != null) {
                log.info("remove pool success, datasourceId:{}", id);
                map.remove(id);
            }
        } catch (Exception e) {
            log.error("error", e);
        } finally {
        }
    }

    /**
     * 获取连接
     *
     * @param dataSource
     * @return
     * @throws SQLException
     */
    public static Connection getPooledConnection(DataSourceDto dataSource) throws SQLException {
        DruidDataSource pool = getJdbcConnectionPool(dataSource);
        return pool.getConnection();
    }

    /**
     * 测试数据库连接  获取一个连接
     *
     * @param dataSource
     * @return
     * @throws ClassNotFoundException driverName不正确
     * @throws SQLException
     */
    public static Connection getUnPooledConnection(DataSourceDto dataSource) throws SQLException {
        DriverClassUtil.loadDriverClass(dataSource.getDriverName(), dataSource.getJdbcUrl());
        if (StringUtils.isBlank(dataSource.getUsername()) && StringUtils.isBlank(dataSource.getPassword())) {
            return DriverManager.getConnection(dataSource.getJdbcUrl());
        }
        return DriverManager.getConnection(dataSource.getJdbcUrl(),
                dataSource.getUsername(), dataSource.getPassword());
    }


}
