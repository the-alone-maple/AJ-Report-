
package com.anjiplus.template.gaea.business.modules.dashboard.service;

import com.anji.plus.gaea.curd.service.GaeaBaseService;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.dto.ChartDto;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.dto.ReportDashboardObjectDto;
import com.anjiplus.template.gaea.business.modules.dashboard.controller.param.ReportDashboardParam;
import com.anjiplus.template.gaea.business.modules.dashboard.dao.entity.ReportDashboard;

/**
* @desc ReportDashboard 大屏设计服务接口
* @author Raod
* @date 2021-04-12 14:52:21.761
**/
public interface ReportDashboardService extends GaeaBaseService<ReportDashboardParam, ReportDashboard> {

    /***
     * 查询详情
     *
     * @param reportCode
     */
    ReportDashboardObjectDto getDetail(String reportCode);

    /***
     * 保存大屏设计
     *
     * @param dto
     */
    void insertDashboard(ReportDashboardObjectDto dto);


    /**
     * 获取单个图表数据
     * @param dto
     * @return
     */
    Object getChartData(ChartDto dto);
}
