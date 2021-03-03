![spring-overview](../image/spring-overview.png)

![Spring 核心特性](../image/Spring 核心特性.png)



![Spring 核心价值](../image/Spring 核心价值.png)

## 为什么要使用IOC容器

对象通过构造器参数、setter方法、工厂方法定义其所需依赖，容器在创建对象时注入依赖，而非手动提供依赖

代码整洁，解耦，易测试

## IOC容器职责

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

## 轻量级容器

1. 可以管理代码
2. 快速启动
3. 不需要特殊的配置
4. 最小的API依赖

## Spring作为IOC容器的优势

1. 典型的IOC管理，依赖查找和依赖注入
2. AOP抽象
3. 事务抽象
4. 事件机制
5. SPI扩展
6. 第三方整合
7. 更好的测试性

## BeanFactory和ApplicationContext

BeanFactory提供了先进的配置机制，能管理所有类型的对象

ApplicationContext除了提供IOC能力，还提供

* 面向切面 AOP
* 配置元信息 Configuration Metadata
* 资源管理 Resources
* 事件 Events
* 国际化 i18n  MessageSource
* 注解 Annotations
* Environment抽象

BeanFactory不对配置格式或注解做限制，而是通过BeanDefinitionReader或BeanPostProcessor进行扩展

ApplicationContext既继承了BeanFactory，内部又组合了一个BeanFactory实例   代理/委托

BeanFactory Bean是延迟加载，ApplicationContext会将单例Bean提前初始化

BeanPostProcessor和BeanFactoryPostProcessor，BeanFactory需要手动注册，ApplicationContext则是自动注册