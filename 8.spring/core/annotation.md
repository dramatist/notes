### Annotation

@Autowired、@Inject、@Value不支持静态字段、方法

@Autowired在单构造函数情况下，多元素注入（数组、集合、映射）在没有匹配的bean可用时解析为空实例

@Resource只能作用于field或只有一个参数的方法

@Autowired、@Inject、@Value、@Resource不能被自定义BeanPostProcessor或BeanFactoryPostProcessor处理

@PostConstruct  @PreDestory

@Qualifier

@Component

@PropertySource、@ComponentScan、@Configuration

@ComponentScan可以指定BeanNameGenerator

@Configuration中的声明了@Bean的方法不能为private或final（Configuration类会被cglib增强）

@Bean定义的bean中如果有shutdown或close方法，会自动配置为destruction回调

**CustomAutowireConfigurer **    **AutowireCandidateResolver**





AnnotatedBeanDefinitionReader

* 条件评估@Conditional：ConditionEvaluator
* Bean范围解析：ScopeMetadataResolver
* BeanDefinition解析：内部
* BeanDefinition处理：AnnotationConfigUtils.processCommonDefinitionAnnotations