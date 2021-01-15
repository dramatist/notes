# 枚举

编译器为你创建一个继承自java.lang.Enum的final类，但其中可以有抽象方法，通过实例来实现抽象方法

所有的实例都是public static final的

字段或方法必须定义在enum实例之后

enum不能和泛型结合

enum实现了Comparable接口，比较实例的ordinal

enum实现了Serializable接口，但JVM对枚举的序列化和反序列化做了限制，序列化时仅将实例name输出到结果中，反序列化时通过name找到对应实例，不会破坏单例

类加载是线程安全时，枚举也是线程安全的

EnumSet     

EnumMap