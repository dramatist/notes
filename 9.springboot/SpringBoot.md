`SpringBoot` 提交效率 快速开发

`SpringBoot`对`Spring`平台和第三方库进行整合，创建可运行的、独立的、生产级的基于`Spring`的应用程序

### 原始`Spring`

1. jar包管理
2. 各种配置
3. bean管理 (注解/xml  JavaConfig)
4. 配置属性文件的读取

### SpringBoot

1. 依赖管理更加简单   ---starter管理
2. 没看到定义bean
3. bean扫描路径没配置
4. 没有定义属性文件的读取

### 设计目标

1. 为所有Spring开发提供更快且更通用的入门体验
2. 开箱即用，可以根据需求快速调整默认值
3. 提供大型项目通用的一系列非功能性功能
4. 绝对没有代码生成，也不需要XML配置

### 核心概念

1. 约定优先配置
2. 配置自动装载

### 通用约定

1. 注解扫描的包目录为启动类所在的包路径

2. 配置文件约定为classpath下的application.yml或application.properties

3. web开发的文件放在classpath，访问的顺序依次是

   >/META-INF/resources-->resources-->static-->public

4. web开发中页面模板，约定放在classpath目录的templates目录下

### Starter

包含许多依赖项，是使项目快速启动和运行所需的依赖项。

命名规范：官方：spring-boot-starter-*   第三方:*-spring-boot-starter

包里没有代码  只管理依赖

功能启用和依赖管理

