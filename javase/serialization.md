### 序列化

对象序列化常用于网络传输、RMI、RPC中，将对象转为可传输的格式，Java序列化将对象转为字节序列

Java序列化机制可以序列Array、Enum和Serializable的对象

ObjectOutputStream   ObjectInputStream

transient 阻止字段被自动序列化

自定义序列化可以实现Externalizable接口，该接口继承自Serializable，增加了writeExternal和readExternal方法

也可以实现Serializable接口，并添加自定义处理方法

* private void writeObject(ObjectOutputStream stream) throws IOException

* private void readObject(ObjectInputStream stream) throws IOException, ClassNotFoundException

* private void readObjectNoData() throws ObjectStreamException;

* Any-access-control Object readResolve() throws ObjectStreamException;

* Any-access-control Object writeReplace() throws ObjectStreamException;

Serializable对象反序列化时不会调用构造器，Externalizable对象反序列化时会调用public的无参的构造器

serialVersionUID

在进⾏反序列化时，JVM会把传来的字节流与本地相应实体类的serialVersionUID进⾏⽐较，如果相同就认为是⼀致的，可以进⾏反序列化，否则就会出现序列化版本不⼀致的异常，即InvalidCastException

没有显示定义serialVersionUID时，Java会根据编译的Class⾃动⽣成，如果Class⽂件没有变化，serialVersionUID也不会变化