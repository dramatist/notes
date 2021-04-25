### 依赖查找

* 查找方式

    * 根据Bean名称查找
    * 根据Bean类型查找
    * 根据Bean名称+类型查找
    * 根据Java注解查找

* 查找类型

    * 实时查找
    * 延迟查找        ObjectFactory/ObjectProvider 

* 查找分类

    * 单一类型依赖查找

        JNDI                javax.naming.Context#lookup

        JavaBeans     java.beans.beancontext.BeanContext

        Spring            BeanFactory

    * 集合类型依赖查找  

        JavaBeans     java.beans.beancontext.BeanContext

        Spring		    ListableBeanFactory

    * 层次性依赖查找       

        JavaBeans     java.beans.beancontext.BeanContext

        Spring            HierarchicalBeanFactory     

ObjectFactoryCreatingFactoryBean

BeanFactoryUtils

getBean线程安全，在操作中会加互斥锁

### 依赖注入

* 注入方式
    * 根据Bean名称注入
    * 根据Bean类型注入
* 注入类型
    * 实时注入
    * 延迟注入  ObjectFactory/ObjectProvider
    * Setter注入、Constructor注入、Field注入、方法注入、Aware回调注入、Autowiring

注入在postProcessProperties执行，早于setter注入，也早于生命周期回调

使用构造器注入，并想通过名字匹配时，需要开启-parameters，会保留方法参数名，也可使用@ConstructorProperties

#### 依赖处理

DefaultListableBeanFactory#resolveDependency

DependencyDescriptor

AutowireCandidateResolver

#### autowiring

* no
* byName
* byType
* constructor

不能注入primitive、String、Class、这些类型的数组

### 依赖来源

| 来源                 | Bean对象 | 生命周期回调 | 配置元信息 | 适用场景   |
| -------------------- | -------- | ------------ | ---------- | ---------- |
| BeanDefinition       | 是       | 是           | 有         | 查找、注入 |
| Singleton            | 是       | 否           | 无         | 查找、注入 |
| ResolvableDependency | 否       | 否           | 无         | 注入       |
| 外部化配置@Value     | 否       | 否           | 无         | 注入       |

AnnotationConfigUtils#registerBeanPostProcessor   内建BeanDefinition

| Bean名称                                                     | Bean实例                               | 使用场景                                             |
| ------------------------------------------------------------ | -------------------------------------- | ---------------------------------------------------- |
| org.springframework.context.annotation.<br>internalConfigurationAnnotationProcessor | ConfigurationClassPostProcessor        | 处理Spring配置类                                     |
| org.springframework.context.annotation.<br>internalAutowiredAnnotationProcessor | AutowiredAnnotationBeanPostProcessor   | 处理@Autowired和@Value                               |
| org.springframework.context.annotation.<br>internalCommonAnnotationProcessor | CommonAnnotationBeanPostProcessor      | 处理JSR-250注解，如      @PreDestroy                 |
| org.springframework.context.event.<br>internalEventListenerProcessor | EventListenerMethodProcessor           | 处理标注 @EventListener 的 Spring 事件监听方法       |
| org.springframework.context.event.<br>internalEventListenerFactory | DefaultEventListenerFactory            | @EventListener 事件监听方法适配为ApplicationListener |
| org.springframework.context.annotation.<br>internalPersistenceAnnotationProcessor | PersistenceAnnotationBeanPostProcessor | JPA注解处理                                          |

AbstractApplicationContext#preparaBeanFactory & initMessageSource ...   内建Singleton

| Bean名称                    | Bean实例                    | 使用场景             |
| --------------------------- | --------------------------- | -------------------- |
| environment                 | Environment                 | Profile & Properties |
| systemProperties            | java.util.Properties        | JVM参数              |
| systemEnvironment           | java.util.Map               | 系统环境变量         |
| messageSource               | MassageSource               | 国际化文案           |
| lifecycleProcessor          | LifecycleProcessor          | Lifecycle Bean处理器 |
| applicationEventMulticaster | ApplicationEventMulticaster | Spring事件广播       |

AbstractApplicationContext#prepareBeanFactory   内建ResolvableDependency  

| Class                     | 实例                            |
| ------------------------- | ------------------------------- |
| BeanFactory               | ConfigurableListableBeanFactory |
| ApplicationContext        | 当前ApplicationContext          |
| ResourceLoader            | 当前ApplicationContext          |
| ApplicationEventPublisher | 当前ApplicationContext          |

### Method Injection

单例Bean A依赖多例Bean B，A每次需要获取一个新B

解决方法：

1. 实现ApplicationContextAware，调用getBean方法
2. ObjectFactory/ObjectProvider
3. Lookup Method Injection：Cglib字节码增强，不能和factory method和@Bean兼容，此时bean的创建不受容器控制

<public|protected>  [abstract]  \<return-type\>  methodName(no-arguments);

```java
public abstract class CommandManager {
    public Object process(Object commandState) {
        Command command = createCommand();
        command.setState(commandState);
        return command.execute();
    }
	@Lookup("myCommand")
    protected abstract Command createCommand();
}
```

```xml
<bean id="myCommand" class="AsyncCommand" scope="prototype" />
<bean id="commandManager" class="CommandManager">
    <lookup-method name="createCommand" bean="myCommand"/>
</bean>
```

#### Method Replacer

通过实现MethodReplacer的类替换任意方法

```xml
<bean id="myValueCalculator" class="MyValueCalculator">
    <replaced-method name="computeValue" replacer="replacementComputeValue">
        <arg-type>java.lang.String</arg-type>
    </replaced-method>
</bean>
<bean id="replacementComputeValue" class="ReplacementComputeValue"/>
```

### 常见异常

NoSuchBeanDefinition

NoUniqueBeanDefinition

BeanCreationException

BeanInstantiationException

BeanDefinitionStoreException





 


