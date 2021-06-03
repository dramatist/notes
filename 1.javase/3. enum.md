### 枚举

编译器为你创建一个继承自java.lang.Enum的final类，但其中可以有抽象方法，通过实例来实现抽象方法

所有的实例都是public static final的

字段或方法必须定义在实例之后

枚举作为内部类时是static的

枚举不能和泛型结合

枚举实现了Comparable接口，比较ordinal

枚举实现了Serializable接口，但对序列化做了限制，序列化时仅将实例name输出，反序列化时通过name找到对应实例

类加载是线程安全时，枚举也是线程安全的

EnumSet  EnumMap