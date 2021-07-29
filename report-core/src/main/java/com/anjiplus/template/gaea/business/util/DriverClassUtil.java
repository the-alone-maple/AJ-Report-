package com.anjiplus.template.gaea.business.util;

import com.anji.plus.gaea.exception.BusinessExceptionBuilder;
import com.anjiplus.template.gaea.business.code.ResponseCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by raodeming on 2021/4/19.
 */
@Slf4j
public final class DriverClassUtil {

    /**
     * 存放驱动类信息
     */
    private static final Map<String, String> DRIVER_CLASS_MAP;

    static {
        DRIVER_CLASS_MAP = new HashMap<>(32);
        DRIVER_CLASS_MAP.put("jdbc:db2", "COM.ibm.db2.jdbc.app.DB2Driver");
        DRIVER_CLASS_MAP.put("jdbc:firebirdsql", "org.firebirdsql.jdbc.FBDriver");
        DRIVER_CLASS_MAP.put("jdbc:edbc", "ca.edbc.jdbc.EdbcDriver");
        DRIVER_CLASS_MAP.put("jdbc:pointbase", "com.pointbase.jdbc.jdbcUniversalDriver");
        DRIVER_CLASS_MAP.put("jdbc:fake", "com.alibaba.druid.mock.MockDriver");
        DRIVER_CLASS_MAP.put("jdbc:informix-sqli", "com.informix.jdbc.IfxDriver");
        DRIVER_CLASS_MAP.put("jdbc:sqlite", "org.sqlite.JDBC");
        DRIVER_CLASS_MAP.put("jdbc:microsoft", "com.microsoft.jdbc.sqlserver.SQLServerDriver");
        DRIVER_CLASS_MAP.put("jdbc:hsqldb", "org.hsqldb.jdbcDriver");
        DRIVER_CLASS_MAP.put("jdbc:postgresql", "org.postgresql.Driver");
        DRIVER_CLASS_MAP.put("jdbc:ingres", "com.ingres.jdbc.IngresDriver");
        DRIVER_CLASS_MAP.put("jdbc:cloudscape", "COM.cloudscape.core.JDBCDriver");
        DRIVER_CLASS_MAP.put("jdbc:JSQLConnect", "com.jnetdirect.jsql.JSQLDriver");
        DRIVER_CLASS_MAP.put("jdbc:derby", "org.apache.derby.jdbc.EmbeddedDriver");
        DRIVER_CLASS_MAP.put("jdbc:timesten", "com.timesten.jdbc.TimesTenDriver");
        DRIVER_CLASS_MAP.put("jdbc:interbase", "interbase.interclient.Driver");
        DRIVER_CLASS_MAP.put("jdbc:h2", "org.h2.Driver");
        DRIVER_CLASS_MAP.put("jdbc:as400", "com.ibm.as400.access.AS400JDBCDriver");
        DRIVER_CLASS_MAP.put("jdbc:sybase:Tds", "com.sybase.jdbc2.jdbc.SybDriver");
        DRIVER_CLASS_MAP.put("jdbc:mock", "com.alibaba.druid.mock.MockDriver");
        DRIVER_CLASS_MAP.put("jdbc:oracle", "oracle.jdbc.driver.OracleDriver");
        DRIVER_CLASS_MAP.put("jdbc:mysql", "com.mysql.jdbc.Driver");
        DRIVER_CLASS_MAP.put("jdbc:odps", "com.aliyun.odps.jdbc.OdpsDriver");
        DRIVER_CLASS_MAP.put("jdbc:mckoi", "com.mckoi.JDBCDriver");
        DRIVER_CLASS_MAP.put("jdbc:jtds", "net.sourceforge.jtds.jdbc.Driver");
        DRIVER_CLASS_MAP.put("jdbc:sapdb", "com.sap.dbtech.jdbc.DriverSapDB");
        DRIVER_CLASS_MAP.put("jdbc:JTurbo", "com.newatlanta.jturbo.driver.Driver");
        DRIVER_CLASS_MAP.put("jdbc:mimer:multi1", "com.mimer.jdbc.Driver");
    }

    /**
     * 加载驱动类信息
     * @param driverClass 驱动类
     * @param url 连接信息
     */
    public static void loadDriverClass(String driverClass, final String url) {
        if(StringUtils.isEmpty(driverClass)) {
            driverClass = getDriverClassByUrl(url);
        }

        try {
            Class.forName(driverClass);
        } catch (ClassNotFoundException e) {
            log.error("error", e);
            throw BusinessExceptionBuilder.build(ResponseCode.CLASS_NOT_FOUND);
        }
    }


    /**
     * 根据 URL 获取对应的驱动类
     *
     * 1. 禁止 url 为空
     * 2. 如果未找到，则直接报错。
     * @param url url
     * @return 驱动信息
     */
    private static String getDriverClassByUrl(final String url) {
        for(Map.Entry<String, String> entry : DRIVER_CLASS_MAP.entrySet()) {
            String urlPrefix = entry.getKey();
            if(url.startsWith(urlPrefix)) {
                return entry.getValue();
            }
        }

        throw BusinessExceptionBuilder.build(ResponseCode.CLASS_NOT_FOUND, "Can't auto find match driver class for url: " + url);
    }

}
