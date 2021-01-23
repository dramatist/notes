## BeanDefinition

元信息

1. 类全名，通常是具体类
2. Bean行为配置，如生命周期回调、作用域、延迟初始化
3. Bean依赖
4. 属性配置，如线程池大小、连接数等

## BeanDefinition注册及实例化

register Instantiation

1. XML

    constructor-arg

    静态工厂

    实例工厂

2. Java注解

    @Component

    @Bean

    @Import

3. API

    BeanDefinitionRegistry#registerBeanDefinition

    BeanDefinitionReaderUtils#registerWithGeneratedName

    AnnotatedBeanDefinitionReader#register

FactoryBean

ServiceLoaderFactoryBean/ServiceFactoryBean/ServiceListFactoryBean

特殊方式（非BeanDefinition模式）
* AutowireCapableBeanFactory#createBean
* SingletonBeanRegistry#registerSingleton

## Bean初始化

Initialization

* @PostConstruct
* 实现InitializingBean接口的afterPropertiesSet方法
* 自定义
    * XML  \<bean init-method="  " />
    * Java注解   @Bean(initMethod="")
    * Java API  AbstractBeanDefinition#setInitMethodName

思考：假设以上三种方式均在同一bean中定义，这些方法的执行顺序是怎么样的

## Bean销毁

Destroy

* PreDestory
* 实现DisposableBean接口的destory方法
* 自定义
    * XML \<bean destory="" />
    * Java注解  @Bean(destory="")
    * Java API   AbstractBeanDefinition#setDestoryMethodName

思考：假设以上三种方式均在同一bean中定义，这些方法的执行顺序是怎样的

## Bean延迟初始化

@Lazy

<bean lazy-init=”true” ... />

## Bean Scope

1. singleton     默认，一个BeanFactory上下文有且只有一个实例
2. prototype   每次依赖查找或注入生成一个新的Bean
3. request       ServletRequest上下文
4. session        HttpSession上下文
5. application  ServletContext上下文
6. websocket

request、session、application主要用于模版引擎

prototype的bean的销毁生命周期回调不会由容器管理

#### BeanDefinition继承

构造器参数、属性、initMethod、destoryMethod、factory method、scope、class

其余不继承，如depends on、lazy、aotuwire mode

当父bean未指定class时，设置abstract=true

## Bean生命周期

### 元信息配置

面向资源：XML、Properties、Groovy

面向注解：@Componet、@Bean...

面向API：BeanDefinitionBuilder / AbstractBeanDefinition

### 元信息解析 

面向资源：BeanDefinitionReader------------>BeanDefinitionParser  

面向注解：AnnotatedBeanDefinitionReader

BeanNameGenerator

### 元信息注册

BeanDefinitionRegistry



@Bean

@Lazy

@Description

@Scope

@DependsOn

@Primary

@Qualifier

@Component