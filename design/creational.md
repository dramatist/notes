### 单例模式

一个类只允许创建一个实例，进程唯一

* 构造函数是private的

* 对象创建的线程安全问题

* 是否延迟加载

* getInstance性能

懒汉式：线程安全、非延迟加载、性能高

饿汉式：线程不安全、延迟加载、性能差

DCL：线程安全、延迟加载、性能较高

静态内部类：线程安全、延迟加载、性能高

枚举：线程安全、非延迟加载、性能高

#### DCL

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

#### 单例存在的问题

1. 对OOP特性支持不友好
2. 对可测试性不友好
3. 不支持有参数的构造函数
4. 对代码的扩展性不友好
5. 隐藏类的依赖关系，对代码的可读性不友好

可考虑工厂模式或IOC容器

#### 线程唯一的单例

ThreadLocal或ConcurrentHashMap

#### 集群唯一的单例

具体来说，我们需要把这个单例对象序列化并存储到外部共享存储区（比如文件）。进程在使用这个单例对象的时候，需要先从外部共享存储区中将它读取到内存，并反序列化成对象，然后再使用，使用完成之后还需要再存储回外部共享存储区。

为了保证任何时刻，在进程间都只有一份对象存在，一个进程在获取到对象之后，需要对对象加锁，避免其他进程再将其获取。在进程使用完这个对象之后，还需要显式地将对象从内存中删除，并且释放对对象的加锁。

#### 多例

可以创建多个对象，但个数有限制

多例模式创建的都是同一个类的对象，工厂模式创建的是不同子类的对象

枚举也是一种多例模式

### 工厂模式

#### 简单工厂

创建一个xxxFactory类，实现createXXX方法，根据参数返回具体实现类对象

#### 工厂方法

创建一个工厂接口，抽象createXXX方法，为每个实现类实现该接口，符合开闭原则，再为这些实现类实现一个简单工厂

当对象创建逻辑比较复杂时使用工厂方法，否则使用简单工厂

#### 抽象工厂

创建一个工厂接口，抽象多个createXXX方法，为每个实现类实现该接口

适用于对象类型需要继续划分的场景，如parser分为JsonParser和XmlParser，而每种parser又可以针对不同场景，如system、datasource等

```java
public interface IParserFactory {
    ISystemParser createSystemParser();
    IDatasourceParser createDatasourceParser();
}
```

### 建造者模式

构造器、setter、builder

适用场景

1. 构造函数所需参数很多，参数列表过长
2. 类的属性之间有一定的依赖关系或约束条件
3. 创建不可变对象

工厂模式用于创建不同但是相关类型的对象，建造者模式创建一种类型的复杂对象，通过参数定制

### 原型模式

如果一个对象的创建成本比较大，而且不同对象间差别不大，可以利用已有对象(原型)通过克隆的方式创建新对象

