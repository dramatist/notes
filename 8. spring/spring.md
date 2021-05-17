![Spring 核心特性](../.image/Spring 核心特性.png)

![Spring 核心价值](../.image/Spring 核心价值.png)

### 核心特性

1. IOC
2. AOP
3. i18n
4. Events
5. Resources
6. Validation
7. Data Binding
8. Type Conversion
9. Spring EL

### 数据存储

1. JDBC
2. 事务抽象
3. DAO支持
4. O/R Mapping
5. XML Marshalling

### Web

* Servlet
    * MVC
    * WebSocket
    * SockJS
* Reactive
    * WebFlux
    * WebClient
    * WebSocket

### 技术整合

1. 远程调用
2. JMS
3. JMX
4. JCA
5. 本地任务Tasks
6. 本地调度Scheduling
7. 缓存抽象Caching
8. 测试
9. Java邮件客户端Email

### IOC容器职责

* 依赖处理
    * 依赖查找
    * 依赖注入

* 生命周期管理
    * 容器
    * 托管的资源
* 配置
    * 容器
    * 托管的资源
    * 外部化配置

### 为什么要使用IOC容器

对象通过元信息定义其所需依赖，容器在创建对象时注入依赖，而非手动提供依赖

代码整洁，解耦，易测试

### Spring作为IOC容器的优势

1. 典型的IOC管理，依赖查找和依赖注入
2. AOP抽象
3. 事务抽象
4. 事件机制
5. SPI扩展
6. 第三方整合
7. 更好的测试性

### 轻量级容器

1. 可以管理代码
2. 快速启动
3. 不需要特殊的配置
4. 最小的API依赖

### BeanFactory和ApplicationContext

BeanFactory提供了先进的配置机制，能管理所有类型的对象

ApplicationContext除了提供IOC能力，还提供了更多企业特性

BeanFactory不对配置格式或注解做限制，而是通过BeanDefinitionReader或BeanPostProcessor进行扩展

ApplicationContext既继承了BeanFactory，内部又组合了一个BeanFactory实例

BeanFactory Bean是延迟加载，ApplicationContext会将单例Bean提前初始化

BeanPostProcessor和BeanFactoryPostProcessor，BeanFactory需要手动注册，ApplicationContext则是自动注册

### 模块

ioc

* spring-core
* spring-beans
* spring-context
* spring-expression
* spring-context-indexer
* spring-context-support

aop

* spring-aop
* spring-aspects

web

* spring-web
* spring-webmvc
* spring-webflux
* spring-websocket

data access

* spring-tx
* spring-jdbc
* spring-r2dbc
* spring-orm

message

* spring-jms
* spring-messaging

logging

* spring-jcl

test

* spring-test



spring-instrument

spring-oxm





