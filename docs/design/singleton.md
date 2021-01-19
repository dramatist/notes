# 单例模式

一个类只允许创建一个实例，进程唯一

* 构造函数是private的

* 线程安全问题

* 延迟加载

* getInstance性能

懒汉式：线程安全、非延迟加载、性能高

饿汉式：线程不安全、延迟加载、性能差

DCL：线程安全、延迟加载、性能较高

静态内部类：线程安全、延迟加载、性能高

枚举：线程安全、非延迟加载、性能高

## DCL

```java
public class Singleton {
    private Singleton() {}
 	
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        Singleton local = instance;   //why
        if (local == null) {
            synchronized (Singleton.class) {
                local = instance;
                if (local == null) {
                    instance = local = new Singleton();
                }
            }
        }
        return local;
    }
}
```

## 单例存在的问题

1. 对OOP特性支持不友好
2. 对可测试性不友好
3. 不支持有参数的构造函数
4. 对代码的扩展性不友好
5. 隐藏类的依赖关系，对代码的可读性不友好

可考虑工厂模式或IOC容器

## 线程唯一的单例

ThreadLocal或ConcurrentHashMap

## 集群唯一的单例

具体来说，我们需要把这个单例对象序列化并存储到外部共享存储区（比如文件）。进程在使用这个单例对象的时候，需要先从外部共享存储区中将它读取到内存，并反序列化成对象，然后再使用，使用完成之后还需要再存储回外部共享存储区。

为了保证任何时刻，在进程间都只有一份对象存在，一个进程在获取到对象之后，需要对对象加锁，避免其他进程再将其获取。在进程使用完这个对象之后，还需要显式地将对象从内存中删除，并且释放对对象的加锁。

## 多例

可以创建多个对象，但个数有限制

多例模式创建的都是同一个类的对象，工厂模式创建的是不同子类的对象

枚举也是一种多例模式

