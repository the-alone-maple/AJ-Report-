```
git clone https://gitee.com/anji-plus/report.git
cd report
sh build.sh
编译完成放在build文件夹 report-core-xxxx.zip

unzip report-core-xxxx.zip
cd report-core-xxxx
vim conf/bootstrap-dev.yml 数据库连接、上传文件的路径以及地址修改
sh bin/start.sh

访问
http://serverip:9095
```

## 编译环境
请在Linux上先准备好maven、node.js、jdk
- [Apache Maven] 3.5 +<br>
- [Node.js] v14.16.0+<br>
- [Jdk] 1.8 <br>
**注**：已知**Jdk11**存在兼容性问题
  
## 克隆源码
git clone https://gitee.com/anji-plus/report.git <br>

## build
进入report目录，启动build.sh
![img_4.png](../picture/quickly/img_4.png) <br>
编译完成后是放在当前目录下的build文件夹中：report-core-xxxx.zip <br>

## 修改mysql连接
解压report-core-xxxx.zip，找到bootstrap-dev.yml

![img_1.png](../picture/quickly/img_1.png) <br>

将图中关于mysql的连接配置信息换成你使用的IP <br>
**注**：aj_report库是存放底层基础信息的库，flyway启动时会自动建立，如果你在这里修改了库，将会出错<br>

![bootstrap.png](../picture/quickly/img_2.png) <br>
**注**：请确认你的Mysql是否支持远程连接，登陆用户是否有DDL权限

## 修改路径
使用上传功能，必须修改此内容
![file.png](../picture/quickly/img_5.png)

## 启动
report-core-XXX --> bin --> start.sh <br>
sh bin/start.sh <br>

## 访问
http://serverip:9095 <br>
默认密码：admin 123456

## 重置mysql连接
登陆进来后请重置mysql连接 <br>
![img_6.png](../picture/quickly/img_6.png)

