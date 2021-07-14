## AOP

通过预编译方式和运行期动态代理实现程序功能的统一维护 
相关术语

1. Joinpoint(连接点) 
    连接点指被拦截到的点。在spring中，这些点指方法
2. Pointcut(切入点) 
    指我们要对哪些joinpoint进行拦截的定义
3. Advice(通知/增强) 
    指被拦截到joinpoint之后所要做的事叫做通知 
    通知分为前置通知、后置通知、异常通知、最终通知、环绕通知
4. Introduction(引介) 
    特殊的通知 在不修改类代码的前提下，可以在运行期动态为类增加方法或域
5. Target(目标对象) 
    被代理对象
6. Weaving(织入) 
    把增强应用到目标对象来创建新的代理对象的过程 
    spring采用动态代理织入,而AspectJ采用编译期织入和类装载期织入  
7. Proxy(代理) 
    一个类被AOP织入增强后，产生一个结果代理类
8. Aspect(切面) 
    切入点和通知(引介)的结合

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

### 