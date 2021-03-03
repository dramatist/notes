### RTTI

RTTI  运行时类型信息  能够在运行时发现和使用类型信息，Java使用Class类实现RTTI，包括类型转换这样的操作都是通过Class实现

#### 反射

Class、Field、Method、Constructor

#### 动态代理

特点：字节码文件随用随创建，随用随加载

作用：不修改源码对方法进行加强

基于接口的动态代理       

​       类：Proxy    提供者：JDK官方

​       如何创建代理对象：Proxy.newProxyInstance

​       要求：被代理类至少实现一个接口

基于子类的动态代理

   ​       类：Enhancer  提供者：第三方cglib

   ​       如何创建代理对象：Enhancer.create

   ​       要求：被代理类不能为final