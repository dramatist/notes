## BeanDefinition

1. 类全名，通常是具体类
2. Bean行为配置，如生命周期回调、作用域、延迟初始化
3. Bean依赖
4. 属性配置，如线程池大小、连接数等

## BeanDefinition注册及实例化

Instantiation

1. XML

    \<bean constructor-arg /\>

    \<bean class = ""   factory-method="" /\>

    \<bean factory-bean=""  factory-method="" /\>

2. 注解

    @Component

    @Bean

    @Import

3. API

    BeanDefinitionRegistry#registerBeanDefinition

    BeanDefinitionReaderUtils#registerWithGeneratedName

    AnnotatedBeanDefinitionReader#register

FactoryBean

ServiceLoaderFactoryBean、ServiceFactoryBean、ServiceListFactoryBean

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
    * XML \<bean destory-method="" />
    * 注解  @Bean(destoryMethod="")
    * API   AbstractBeanDefinition#setDestoryMethodName

思考：假设以上三种方式均在同一bean中定义，这些方法的执行顺序是怎样的

## Bean延迟初始化

@Lazy

\<bean lazy-init="true" /\>

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

### BeanDefinition元信息配置

面向资源：XML、Properties、Groovy

面向注解：@Componet、@Bean...

面向API：BeanDefinitionBuilder / AbstractBeanDefinition

### BeanDefinition元信息解析 

面向资源：BeanDefinitionReader------------>BeanDefinitionParser  

面向注解：AnnotatedBeanDefinitionReader

BeanNameGenerator

BeanDefinitionHolder

### Bean注册

BeanDefinitionRegistry#registerBeanDefinition

SingletonBeanRegistry#registerSingleton

### BeanDefinition合并

ConfigurableBeanFactory#getMergedBeanDefinition

GenericBeanDefinition------->RootBeanDefinition------->MergedBeanDefinition

AnnotatedBeanDefinition

### Bean Class加载

ClassLoader

Java SecurityManager

ConfigurableListable#setTempClassLoader

### Bean实例化

* 实例化前
    * InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation
* 实例化
    * 实例化策略：InstantiationStrategy
    * 构造器依赖注入
* 实例化后
    * InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation

### Bean属性赋值

PropertyValues

* 赋值前
    * Spring5.0 InstantiationAwareBeanPostProcessor#postProcessPropertyValues
    * Spring5.1 InstantiationAwareBeanPostProcessor#postProcessProperties
* 赋值

### Aware回调

* BeanFactory
    * BeanNameAware
    * BeanClassLoaderAware
    * BeanFactoryAware
* ApplicationContext       ApplicationContextAwareProcessor#postProcessBeforeInitialization
    * EnvironmentAware
    * EmbeddedValueResolverAware
    * ResouceLoaderAware
    * ApplicationEventPublisherAware
    * MessageSourceAware
    * ApplicationContextAware

### Bean初始化

* 初始化前
    * BeanPostProcessor#postProcessBeforeInitialization
    * @PreDestory    CommonAnnotationBeanPostProcessor#postProcessBeforeInitialization
* 初始化
    * InitializingBean
    * 自定义初始化方法

* 初始化后
    * BeanPostProcessor#postProcessAfterInitialization
* 初始化完成
    * ​	Spring4.1 SmartInitializingSingleton#afterSingletonsInstantiated

### Bean销毁

* 销毁前
    * DestructionAwareBeanPostProcessor#postProcessBeforeDesturction
    * 



@Bean

@Lazy

@Description

@Scope

@DependsOn

@Primary

@Qualifier

@Component