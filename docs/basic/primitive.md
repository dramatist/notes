# 基本数据类型

| Primitive | Package   |
| --------- | --------- |
| boolean   | Boolean   |
| byte      | Byte      |
| short     | Short     |
| char      | Character |
| int       | Integer   |
| long      | Long      |
| float     | Float     |
| double    | Double    |
| void      | Void      |

JDK5  自动装拆箱   valueOf & primitiveValue

将一个范围在：

- -128 至 127 之间的整数
- true 和 false 的布尔值
- \u0000 至 \u007f 之间的字符

的值装箱时会使用到缓存CharacterCache、ByteCache、ShortCache、IntegerCache、LongCache

IntegerCache的最大值可以通过 -XX:AutoBoxCacheMax=size 来设置

缓存在valueOf方法内部返回，而通过构造函数不生效

Integer.TYPE == int.class

