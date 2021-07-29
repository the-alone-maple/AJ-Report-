package com.anjiplus.template.gaea.business.modules.dict.controller.dto;

import com.anji.plus.gaea.curd.dto.GaeaBaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * (GaeaDict)实体类
 *
 * @author lr
 * @since 2021-02-23 10:01:02
 */
@ApiModel(value = "")
public class GaeaDictDTO extends GaeaBaseDTO implements Serializable {
    /**
     * 字典名称
     */
    @ApiModelProperty(value = "字典名称")
    private String dictName;
    /**
     * 字典编号
     */
    @ApiModelProperty(value = "字典编号")
    private String dictCode;
    /**
     * 字典描述
     */
    @ApiModelProperty(value = "字典描述")
    private String remark;

    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    public String getDictCode() {
        return dictCode;
    }

    public void setDictCode(String dictCode) {
        this.dictCode = dictCode;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public String toString() {
        return "GaeaDictDTO{" +
                "dictName='" + dictName + '\'' +
                ", dictCode='" + dictCode + '\'' +
                ", remark='" + remark + '\'' +
                '}';
    }
}
