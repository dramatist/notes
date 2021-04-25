### Annotation

| Spring                   | Jakarta           |
| ------------------------ | ----------------- |
| @Autowired               | @Inject/@Resource |
| @Order                   | @Priority         |
| @Qualifier               | @Named            |
| @Component               | @ManagedBean      |
| @Scope("singleton")      | @Singleton        |
| @ComponentScan           |                   |
| @Configuration           |                   |
| @Value                   |                   |
| @Import                  |                   |
| @ImportResources         |                   |
| @ConfigurationProperties |                   |
| @Conditional             |                   |

注解注入在XML注入之前

@Autowired不支持静态字段、方法

@Autowired在单构造函数情况下，多元素注入（数组、集合、映射）在没有匹配的bean可用时解析为空实例。

@Autowired、@Inject、@Value、@Resource不能被自定义BeanPostProcessor或BeanFactoryPostProcessor处理

**CustomAutowireConfigurer **    **AutowireCandidateResolver**

@Resource对于BeanFactory、ApplicationContext、Environment、ResourceLoader、ApplicationEventPublisher、MessageSource的注入类似Autowired，不根据名称

@Resource只能作用于field或只有一个参数的方法

@ComponentScan可以指定BeanNameGenerator

@Configuration中的声明了@Bean的方法不能为private或final（Configuration类会被cglib增强）

@Bean定义的bean中如果有shutdown或close方法，会自动配置为destruction回调
