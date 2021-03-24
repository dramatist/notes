# SPI

Application Programming Interface  被应用开发人员使用，实现方定义接口并产生不同实现，调用方无权选择实现

Service Provider Interface         被框架扩展人员使用，调用方定义接口，实现方进行不同实现，调用方选择需要的实现

META-INF/services，新建以接口全类名命名的文件，每一行对应一个实现类

ServiceLoader

1. 应用程序调用ServiceLoader.load方法

    ServiceLoader.load方法内先创建一个新的ServiceLoader，并实例化该类中的成员变量，包括：

    service(Class类型，要加载的接口)

    loader(ClassLoader类型，类加载器)

    acc(AccessControlContext类型，访问控制器)

    providers(LinkedHashMap类型，缓存加载成功的类)

    lookupIterator(LazyIterator类型，实现迭代器功能)

2. 应用程序通过迭代器接口获取对象实例

    ServiceLoader先判断成员变量providers对象中(LinkedHashMap类型)是否有缓存实例对象，如果有缓存，直接返回

    如果没有缓存，执行类的装载：

    读取META-INF/services/下的配置文件，获得所有能被实例化的类的名称

    通过反射方法Class.forName()加载类对象，并用instance()方法将类实例化

    把实例化后的类缓存到providers对象中

    返回实例对象