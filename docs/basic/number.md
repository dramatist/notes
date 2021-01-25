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

## 溢出

使用Math.addExact、subtractExact等xxExact方法

使用BigInteger和BigDecimal

## 浮点数

IEEE 754标准

存在很大的精度问题

## BigDecimal

scale：小数点右边的位数

precision：精度，有效数字的长度

使用BigDecimal表达和计算浮点数时，使用字符串构造，不能使用Double.toString，确实需要使用Double时，使用BigDecimal.valueOf

浮点数的格式化也应使用BigDecimal，通过DecimalFormat和RoundingMode或setScale

BigDecimal的equals和hashcode方法会比较value和scale，建议使用compareTo

BigDecimal在放入hash结构使用时，应stripTralingZeros，确保value相同时，scale也相同