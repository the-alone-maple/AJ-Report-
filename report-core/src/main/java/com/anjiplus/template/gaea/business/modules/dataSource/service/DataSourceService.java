
package com.anjiplus.template.gaea.business.modules.dataSource.service;

import com.alibaba.fastjson.JSONObject;
import com.anji.plus.gaea.curd.service.GaeaBaseService;
import com.anjiplus.template.gaea.business.modules.dataSet.controller.dto.DataSetDto;
import com.anjiplus.template.gaea.business.modules.dataSource.controller.dto.DataSourceDto;
import com.anjiplus.template.gaea.business.modules.dataSource.controller.param.ConnectionParam;
import com.anjiplus.template.gaea.business.modules.dataSource.controller.param.DataSourceParam;
import com.anjiplus.template.gaea.business.modules.dataSource.dao.entity.DataSource;

import java.util.List;

/**
* @desc DataSource 数据集服务接口
* @author Raod
* @date 2021-03-18 12:09:57.728203200
**/
public interface DataSourceService extends GaeaBaseService<DataSourceParam, DataSource> {

    /**
     * 获取所有数据源
     * @return
     */
    List<DataSource> queryAllDataSource();

    /**
     * 测试 连接
     * @param connectionParam
     * @return
     */
    Boolean testConnection(ConnectionParam connectionParam);

    /**
     * 执行sql
     * @param dto
     * @return
     */
    List<JSONObject> execute(DataSourceDto dto);

    /**
     * 执行sql,统计数据total
     * @param dataSourceDto
     * @param dto
     * @return
     */
    long total(DataSourceDto dataSourceDto, DataSetDto dto);
}
