/*
kudu驱动更新
 */
UPDATE `aj_report`.`gaea_dict_item` SET `dict_code` = 'SOURCE_TYPE', `item_name` = 'kudu impala', `item_value` = 'kudu_impala', `item_extend` = '[{\"label\":\"driverName\",\"value\":\"com.cloudera.impala.jdbc41.Driver\",\"labelValue\":\"驱动类\"},{\"label\":\"jdbcUrl\",\"value\":\"jdbc:impala://10.108.3.111:21050/ods\",\"labelValue\":\"连接串\"},{\"label\":\"username\",\"value\":\"\",\"labelValue\":\"用户名\"},{\"label\":\"password\",\"value\":\"\",\"labelValue\":\"密码\"}]', `enabled` = 1, `locale` = 'zh', `remark` = NULL, `sort` = 2, `create_by` = 'admin', `create_time` = '2021-03-23 10:54:08', `update_by` = 'admin', `update_time` = '2021-04-01 09:18:09', `version` = 3 WHERE `id` = 133;
