package com.anjiplus.template.gaea.business.modules.dict.controller.dto;

import com.anji.plus.gaea.annotation.Formatter;
import com.anji.plus.gaea.curd.dto.GaeaBaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
/**
 * 数据字典项(GaeaDictItem)实体类
 *
 * @author lirui
 * @since 2021-03-10 13:05:59
 */
@ApiModel(value = "数据字典项")
public class GaeaDictItemDTO extends GaeaBaseDTO implements Serializable {
            /**
    * 数据字典编码
    */
    @ApiModelProperty(value = "数据字典编码")
    private String dictCode;
        /**
    * 字典项名称
    */
    @ApiModelProperty(value = "字典项名称")
    private String itemName;
        /**
    * 字典项值
    */
    @ApiModelProperty(value = "字典项值")
    private String itemValue;

    /**
     * 字典项扩展
     */
    @ApiModelProperty(value = "字典项扩展")
    private String itemExtend;
        /**
    * 语言标识
    */
    @ApiModelProperty(value = "语言标识")
    @Formatter(dictCode = "LOCALE", targetField = "localeView")
    private String locale;

    private String localeView;
        /**
    * 描述
    */
    @ApiModelProperty(value = "描述")
    private String remark;
        /**
    * 排序
    */
    @ApiModelProperty(value = "排序")
    private Integer sort;

    public String getDictCode() {
        return dictCode;
    }

    public void setDictCode(String dictCode) {
        this.dictCode = dictCode;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemValue() {
        return itemValue;
    }

    public void setItemValue(String itemValue) {
        this.itemValue = itemValue;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public String getItemExtend() {
        return itemExtend;
    }
    public void setItemExtend(String itemExtend) {
        this.itemExtend = itemExtend;
    }

    public String getLocaleView() {
        return localeView;
    }

    public void setLocaleView(String localeView) {
        this.localeView = localeView;
    }

    @Override
    public String toString() {
        return "GaeaDictItemDTO{" +
                "dictCode='" + dictCode + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemValue='" + itemValue + '\'' +
                ", itemExtend='" + itemExtend + '\'' +
                ", locale='" + locale + '\'' +
                ", localeView='" + localeView + '\'' +
                ", remark='" + remark + '\'' +
                ", sort=" + sort +
                '}';
    }
}
