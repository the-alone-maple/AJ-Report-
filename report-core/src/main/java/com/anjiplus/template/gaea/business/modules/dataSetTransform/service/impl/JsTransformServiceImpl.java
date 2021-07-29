package com.anjiplus.template.gaea.business.modules.dataSetTransform.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.anji.plus.gaea.exception.BusinessExceptionBuilder;
import com.anjiplus.template.gaea.business.modules.dataSetTransform.controller.dto.DataSetTransformDto;
import com.anjiplus.template.gaea.business.modules.dataSetTransform.service.TransformStrategy;
import com.anjiplus.template.gaea.business.code.ResponseCode;
import jdk.nashorn.api.scripting.ScriptObjectMirror;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by raodeming on 2021/3/23.
 */
@Component
@Slf4j
public class JsTransformServiceImpl implements TransformStrategy {

    private ScriptEngine engine;
    {
        ScriptEngineManager manager = new ScriptEngineManager();
        engine = manager.getEngineByName("JavaScript");
    }

    /**
     * 数据清洗转换 类型
     *
     * @return
     */
    @Override
    public String type() {
        return "js";
    }

    /***
     * 清洗转换算法接口
     * @param def
     * @param data
     * @return
     */
    @Override
    public List<JSONObject> transform(DataSetTransformDto def, List<JSONObject> data) {
        return getValueFromJs(def,data);
    }

    private List<JSONObject> getValueFromJs(DataSetTransformDto def, List<JSONObject> data) {
        String js = def.getTransformScript();
        js = js + "\nvar result = dataTransform(eval(" + data.toString() + "));";
        try {
            engine.eval(js);
            ScriptObjectMirror result = (ScriptObjectMirror) engine.get("result");
            return result.values().stream().map(o -> JSONObject.parseObject(JSONObject.toJSONString(o))).collect(Collectors.toList());
        } catch (Exception ex) {
            throw BusinessExceptionBuilder.build(ResponseCode.EXECUTE_JS_ERROR, ex.getMessage());
        }
    }
}
