use aj_report;

-- ----------------------------
-- Table structure for access_authority
-- ----------------------------
DROP TABLE IF EXISTS `access_authority`;
CREATE TABLE `access_authority`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_target` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '父ID',
  `target` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '菜单代码',
  `target_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '菜单名称',
  `action` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '按钮代码',
  `action_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '按钮名称',
  `sort` int(8) NULL DEFAULT NULL,
  `enable_flag` int(1) NOT NULL DEFAULT 1 COMMENT '0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG',
  `delete_flag` int(1) NULL DEFAULT 0 COMMENT ' 0--未删除 1--已删除 DIC_NAME=DEL_FLAG',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '创建人',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '修改人',
  `update_time` datetime(0) NOT NULL COMMENT '修改时间',
  `version` tinyint(8) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `TA_uniq_index`(`target`, `action`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 233 CHARACTER SET = utf8 COLLATE = utf8_bin COMMENT = '运营权限表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of access_authority
-- ----------------------------
INSERT INTO `access_authority` VALUES (1, NULL, 'access', '用户权限', '', '', 1, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (2, NULL, 'report', '报表设计', '', '', 2, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (101, 'access', 'authorityManage', '权限管理', 'insert', '新增权限', 101, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (102, 'access', 'authorityManage', '权限管理', 'update', '修改权限', 102, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (103, 'access', 'authorityManage', '权限管理', 'delete', '删除权限', 103, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (104, 'access', 'authorityManage', '权限管理', 'query', '查询权限', 104, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (105, 'access', 'roleManage', '角色管理', 'insert', '新建角色', 105, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2021-07-17 20:41:46', 2);
INSERT INTO `access_authority` VALUES (106, 'access', 'roleManage', '角色管理', 'update', '修改角色', 106, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (107, 'access', 'roleManage', '角色管理', 'delete', '删除角色', 107, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (108, 'access', 'roleManage', '角色管理', 'query', '查询角色', 108, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (109, 'access', 'roleManage', '角色管理', 'grantAuthority', '分配权限', 109, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (110, 'access', 'userManage', '用户管理', 'insert', '新增用户', 110, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (111, 'access', 'userManage', '用户管理', 'update', '修改用户', 111, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (112, 'access', 'userManage', '用户管理', 'delete', '删除用户', 112, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (113, 'access', 'userManage', '用户管理', 'query', '查询用户', 113, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (114, 'access', 'userManage', '用户管理', 'resetPassword', '重置密码', 114, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (115, 'access', 'userManage', '用户管理', 'grantRole', '分配角色', 115, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (200, 'report', 'datasourceManage', '数据源管理', 'insert', '新建数据源', 200, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (201, 'report', 'datasourceManage', '数据源管理', 'update', '修改数据源', 201, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (202, 'report', 'datasourceManage', '数据源管理', 'delete', '删除数据源', 202, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (203, 'report', 'datasourceManage', '数据源管理', 'query', '查询数据源', 203, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (204, 'report', 'resultsetManage', '数据集管理', 'insert', '新建数据集', 204, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (205, 'report', 'resultsetManage', '数据集管理', 'update', '修改数据集', 205, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (206, 'report', 'resultsetManage', '数据集管理', 'delete', '删除数据集', 206, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (207, 'report', 'resultsetManage', '数据集管理', 'query', '查询数据集', 207, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (221, 'report', 'reportManage', '报表管理', 'insert', '新建报表', 221, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (222, 'report', 'reportManage', '报表管理', 'update', '修改报表', 222, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (223, 'report', 'reportManage', '报表管理', 'delete', '删除报表', 223, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (224, 'report', 'reportManage', '报表管理', 'query', '查询报表', 224, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (231, 'report', 'bigScreenManage', '大屏报表', 'share', '分享报表', 231, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (232, 'report', 'bigScreenManage', '大屏报表', 'view', '查看大屏', 232, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);
INSERT INTO `access_authority` VALUES (233, 'report', 'bigScreenManage', '大屏报表', 'design', '设计大屏', 233, 1, 0, 'admin', '2019-07-23 15:59:40', 'admin', '2019-07-23 15:59:40', 1);

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
--  Table structure for `access_role`
-- ----------------------------
DROP TABLE IF EXISTS `access_role`;
CREATE TABLE `access_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_code` varchar(32) COLLATE utf8_bin NOT NULL COMMENT '角色编码',
  `role_name` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '角色名称',
  `enable_flag` int(1) NOT NULL DEFAULT '1' COMMENT '0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG',
  `delete_flag` int(1) DEFAULT '0' COMMENT ' 0--未删除 1--已删除 DIC_NAME=DEL_FLAG',
  `create_by` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '创建人',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_by` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `version` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='运营角色表';

-- ----------------------------
--  Records of `access_role`
-- ----------------------------
BEGIN;
INSERT INTO `access_role` VALUES ('1', 'root', '超级管理员', '1', '0', 'root', '2019-07-23 16:00:33', 'root', '2019-07-23 16:00:33', '1'), ('2', 'designer', '设计员', '1', '0', 'root', '2019-07-23 16:00:33', 'root', '2019-07-23 16:00:33', '1'), ('3', 'viewer', '查看员', '1', '0', 'root', '2019-07-23 16:00:33', 'root', '2019-07-23 16:00:33', '1');
COMMIT;

-- ----------------------------
-- Table structure for access_role_authority
-- ----------------------------
DROP TABLE IF EXISTS `access_role_authority`;
CREATE TABLE `access_role_authority`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_code` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '角色名称',
  `target` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '权限目标',
  `action` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 510 CHARACTER SET = utf8 COLLATE = utf8_bin COMMENT = '运营角色权限表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of access_role_authority
-- ----------------------------
INSERT INTO `access_role_authority` VALUES (460, 'viewer', 'datasourceManage', 'query');
INSERT INTO `access_role_authority` VALUES (461, 'viewer', 'resultsetManage', 'query');
INSERT INTO `access_role_authority` VALUES (462, 'viewer', 'reportManage', 'query');
INSERT INTO `access_role_authority` VALUES (463, 'viewer', 'bigScreenManage', 'share');
INSERT INTO `access_role_authority` VALUES (464, 'viewer', 'bigScreenManage', 'view');
INSERT INTO `access_role_authority` VALUES (465, 'designer', 'datasourceManage', 'insert');
INSERT INTO `access_role_authority` VALUES (466, 'designer', 'datasourceManage', 'update');
INSERT INTO `access_role_authority` VALUES (467, 'designer', 'datasourceManage', 'delete');
INSERT INTO `access_role_authority` VALUES (468, 'designer', 'datasourceManage', 'query');
INSERT INTO `access_role_authority` VALUES (469, 'designer', 'resultsetManage', 'insert');
INSERT INTO `access_role_authority` VALUES (470, 'designer', 'resultsetManage', 'update');
INSERT INTO `access_role_authority` VALUES (471, 'designer', 'resultsetManage', 'delete');
INSERT INTO `access_role_authority` VALUES (472, 'designer', 'resultsetManage', 'query');
INSERT INTO `access_role_authority` VALUES (473, 'designer', 'reportManage', 'insert');
INSERT INTO `access_role_authority` VALUES (474, 'designer', 'reportManage', 'update');
INSERT INTO `access_role_authority` VALUES (475, 'designer', 'reportManage', 'delete');
INSERT INTO `access_role_authority` VALUES (476, 'designer', 'reportManage', 'query');
INSERT INTO `access_role_authority` VALUES (477, 'designer', 'bigScreenManage', 'share');
INSERT INTO `access_role_authority` VALUES (478, 'designer', 'bigScreenManage', 'view');
INSERT INTO `access_role_authority` VALUES (479, 'designer', 'bigScreenManage', 'design');
INSERT INTO `access_role_authority` VALUES (480, 'root', 'authorityManage', 'insert');
INSERT INTO `access_role_authority` VALUES (481, 'root', 'authorityManage', 'update');
INSERT INTO `access_role_authority` VALUES (482, 'root', 'authorityManage', 'delete');
INSERT INTO `access_role_authority` VALUES (483, 'root', 'authorityManage', 'query');
INSERT INTO `access_role_authority` VALUES (484, 'root', 'roleManage', 'insert');
INSERT INTO `access_role_authority` VALUES (485, 'root', 'roleManage', 'update');
INSERT INTO `access_role_authority` VALUES (486, 'root', 'roleManage', 'delete');
INSERT INTO `access_role_authority` VALUES (487, 'root', 'roleManage', 'query');
INSERT INTO `access_role_authority` VALUES (488, 'root', 'roleManage', 'grantAuthority');
INSERT INTO `access_role_authority` VALUES (489, 'root', 'userManage', 'insert');
INSERT INTO `access_role_authority` VALUES (490, 'root', 'userManage', 'update');
INSERT INTO `access_role_authority` VALUES (491, 'root', 'userManage', 'delete');
INSERT INTO `access_role_authority` VALUES (492, 'root', 'userManage', 'query');
INSERT INTO `access_role_authority` VALUES (493, 'root', 'userManage', 'resetPassword');
INSERT INTO `access_role_authority` VALUES (494, 'root', 'userManage', 'grantRole');
INSERT INTO `access_role_authority` VALUES (495, 'root', 'datasourceManage', 'insert');
INSERT INTO `access_role_authority` VALUES (496, 'root', 'datasourceManage', 'update');
INSERT INTO `access_role_authority` VALUES (497, 'root', 'datasourceManage', 'delete');
INSERT INTO `access_role_authority` VALUES (498, 'root', 'datasourceManage', 'query');
INSERT INTO `access_role_authority` VALUES (499, 'root', 'resultsetManage', 'insert');
INSERT INTO `access_role_authority` VALUES (500, 'root', 'resultsetManage', 'update');
INSERT INTO `access_role_authority` VALUES (501, 'root', 'resultsetManage', 'delete');
INSERT INTO `access_role_authority` VALUES (502, 'root', 'resultsetManage', 'query');
INSERT INTO `access_role_authority` VALUES (503, 'root', 'reportManage', 'insert');
INSERT INTO `access_role_authority` VALUES (504, 'root', 'reportManage', 'update');
INSERT INTO `access_role_authority` VALUES (505, 'root', 'reportManage', 'delete');
INSERT INTO `access_role_authority` VALUES (506, 'root', 'reportManage', 'query');
INSERT INTO `access_role_authority` VALUES (507, 'root', 'bigScreenManage', 'share');
INSERT INTO `access_role_authority` VALUES (508, 'root', 'bigScreenManage', 'view');
INSERT INTO `access_role_authority` VALUES (509, 'root', 'bigScreenManage', 'design');

SET FOREIGN_KEY_CHECKS = 1;


-- ----------------------------
--  Table structure for `access_user`
-- ----------------------------
DROP TABLE IF EXISTS `access_user`;
CREATE TABLE `access_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `login_name` varchar(64) COLLATE utf8_bin NOT NULL COMMENT ' 登录名',
  `real_name` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '真实用户',
  `password` varchar(128) COLLATE utf8_bin NOT NULL COMMENT '密码',
  `phone` varchar(16) COLLATE utf8_bin DEFAULT NULL COMMENT '手机号码',
  `email` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '用户邮箱',
  `remark` varchar(512) COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后一次登陆时间',
  `last_login_ip` varchar(16) COLLATE utf8_bin DEFAULT NULL COMMENT '最后一次登录IP',
  `enable_flag` int(1) NOT NULL DEFAULT '1' COMMENT '0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG',
  `delete_flag` int(1) NOT NULL DEFAULT '0' COMMENT ' 0--未删除 1--已删除 DIC_NAME=DEL_FLAG',
  `create_by` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `version` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX1` (`login_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=308 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='运营用户表';

-- ----------------------------
--  Records of `access_user`
-- ----------------------------
BEGIN;
INSERT INTO `access_user` VALUES ('1', 'admin', '管理员', 'afbc19467fbff0690b5eba5209d0e966', '18019216253', 'admin1@admin.com', null, '2018-08-20 22:04:02', '172.30.16.129', '1', '0', 'admin', '2019-07-23 16:00:38', 'admin', '2019-07-23 16:00:38', '1'), ('2', 'guest', '访客', '5632ad5d163ccaf1ecc305315a1a8e16', '18019214578', 'admin1@admin.com', null, '2018-08-20 22:04:02', '172.30.16.129', '1', '0', 'guest', '2019-07-23 16:00:38', 'admin', '2019-07-23 16:00:38', '1');
COMMIT;

-- ----------------------------
--  Table structure for `access_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `access_user_role`;
CREATE TABLE `access_user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `login_name` varchar(32) COLLATE utf8_bin NOT NULL COMMENT '权限目标',
  `role_code` varchar(32) COLLATE utf8_bin NOT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='运营角色权限表';

-- ----------------------------
--  Records of `access_user_role`
-- ----------------------------
BEGIN;
INSERT INTO `access_user_role` VALUES ('13', 'guest', 'viewer'), ('14', 'admin', 'root'), ('15', 'admin', 'designer'), ('16', 'admin', 'viewer');
COMMIT;

DROP TABLE IF EXISTS `gaea_user`;