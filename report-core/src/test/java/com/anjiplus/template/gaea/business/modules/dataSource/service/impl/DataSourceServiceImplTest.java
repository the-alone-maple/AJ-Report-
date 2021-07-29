package com.anjiplus.template.gaea.business.modules.dataSource.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.anjiplus.template.gaea.business.ReportApplication;
import com.anjiplus.template.gaea.business.modules.dataSource.controller.dto.DataSourceDto;
import com.anjiplus.template.gaea.business.modules.dataSource.service.DataSourceService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


/**
 * Created by raodeming on 2021/7/19.
 */
@SpringBootTest(classes = ReportApplication.class)
@RunWith(SpringRunner.class)
public class DataSourceServiceImplTest {

    @Autowired
    private DataSourceService dataSourceService;

    @Test
    public void testHttp(){
        DataSourceDto dto = new DataSourceDto();
        dto.setSourceType("http");
        dto.setHeader("{\"Content-Type\":\"application/json\"}");
        dto.setSourceConfig("{\"apiUrl\":\"http://10.108.26.163:9200/_xpack/sql?format=json\",\"method\":\"POST\",\"header\":\"{\\\"Content-Type\\\":\\\"application/json\\\"}\",\"body\":\"{\\\"query\\\":\\\"select 1\\\"}\"}");
        dto.setDynSentence("{\"query\": \"select HISTOGRAM(logTime,INTERVAL 1 MONTH) as h ,count(flag),flag from \\\"analysis-wifilogin\\\" where  logTime>='2021-02-22 00:28:10.000' and logTime<'2021-03-22 00:28:10.000' GROUP BY h,flag\"}");
        List<JSONObject> execute = dataSourceService.execute(dto);
        System.out.println(execute);
    }

}
