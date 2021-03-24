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

一个范围在：

- -128 至 127 之间的整数
- true 和 false 的布尔值
- \u0000 至 \u007f 之间的字符

的值自动装箱时会使用到缓存：CharacterCache、ByteCache、ShortCache、IntegerCache、LongCache

IntegerCache的最大值可以通过 -XX:AutoBoxCacheMax=size 来设置

Integer.TYPE == int.class

## 溢出

使用Math.addExact、subtractExact等xxExact方法

使用BigInteger和BigDecimal

|           |      |      |      |      |
| --------- | ---- | ---- | ---- | ---- |
| a < b     |      |      |      |      |
| a - b < 0 |      |      |      |      |

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

# String

Java8及之前内部使用char数组，Java9之后使用byte数组，并使用byte coder表示编码

接口 CharSequence 从 CharBuffer、String、StringBuffer、StringBuilder类中抽象出了字符序列的一般化定义

## String +

String不可变，每次修改都会创建新的对象

StringBuffer线程安全，开销大

StringBuilder线程不安全，性能高

两个字符串常量进行+，编译器进行常量折叠

+操作会被编译器使用StringBuilder的append方法替代，在循环中使用+会导致大量创建StringBuilder

StringJoiner

## String长度限制

运行时限制：数组最大长度为Integer#MAX_VALUE

常量池限制：JVM规范提出，字符串常量长度用两个字节表示，即16个bit，最大长度为65535

javac限制：javac在长度大于等于65535时报错

## String不可变

缓存hash值，String内部有个变量hash保存hash值

String常量池的需要

线程安全

## substring

JDK 6 中 substring方法不生成新的字符数组，而是共用，只改变offset和count，导致内存泄漏

JDK 7 中 substring方法生成新的字符数组，解决了内存泄漏问题

## replace  replaceAll  replaceFirst

replace(CharSequence target, CharSequence replacement) ，用replacement替换所有的target，两个参数都是字符串

replaceAll(String regex, String replacement) ，用replacement替换所有的regex匹配项

replaceFirst(String regex, String replacement) ，基本和replaceAll相同，区别是只替换第一个匹配项

## trim  strip

移除首尾空白字符

trim移除的空白字符指的是指ASCII值小于或等于32的任何字符

但根据Unicode标准，除了ASCII中还有许多空白字符，可使用Character.isWhiteSpace判断

JDK11中新增了strip方法，会删除Unicode中的空白字符，比trim更通用

## 格式化输出

JDK5 引入了**fotmat**方法，可用于 `PrintStream` 或者 `PrintWriter` 对象

String.format在格式化浮点数时，默认使用四舍五入

### Fomatter类

在 Java 中，所有的格式化功能都是由 `java.util.Formatter` 类处理的

### 格式化修饰符

%\[argument_index$\]  \[flags\]  \[width\]  \[.precision\]  conversion 

控制一个字段的最小长度，通过指定 *width* 来实现

控制一个字段的最大长度，通过指定 *precision* 来实现

在将 *precision* 应用于字符串时，它表示打印时输出字符的最大数量。而在将 *precision* 应用于浮点数时，它表示小数部分要显示出来的位数（默认是 6 位小数），如果小数位数过多则舍入，太少则在尾部补零。

Conversion:

| 类型 | 含义               |
| :--: | :----------------- |
|  d   | 整型（十进制）     |
|  c   | Unicode字符        |
|  b   | Boolean值          |
|  s   | String             |
|  f   | 浮点数（十进制）   |
|  e   | 浮点数（科学计数） |
|  x   | 整型（十六进制）   |
|  h   | 散列码（十六进制） |
|  a   | 浮点数(十六进制)   |
|  n   | 换行               |
|  %   | 字面值“%”          |

# 运算符

* 算术运算符
* 关系运算符
* 逻辑运算符
* 条件运算符  ？：
* 位运算符
* 赋值运算符
* 类型比较运算符    instanceof
* 移位操作符<<  >>  >>>,   >>有符号右移，多出来的位补符号位; >>>无符号右移，多出来的位补0

对小于 **int** 的基本数据类型（即 **char**、**byte** 或 **short**）执行任何算术或按位操作，这些值会在执行操作之前类型提升为 **int**，并且结果值的类型为 **int**

对+=等赋值运算符，会执行隐式的向下类型转换

``` java
float a = 2.2f;
a += 2.2;      //yes  ====  a = (float)(a + 2.2)
a = a + 2.2    //no
```

### Conditional Operator

当第二位和第三位操作数的类型相同时，则三目运算符表达式的结果和这两位操作数的类型相同

当第二位和第三位操作数分别为基本类型和该基本类型对应的包装类型时，那么该表达式的结果的类型要求是基本类型

JDK8 将条件表达式分为三类：

如果表达式的第二个和第三个操作数都是布尔表达式，那么该条件表达式就是布尔表达式

如果表达式的第二个和第三个操作数都是数字型表达式，那么该条件表达式就是数字型表达式

除了以上两种以外的表达式就是引用表达式

## 控制流程

if、else、while、do-while、for、foreach、break、continue、return、switch

switch只支持byte、short、char、int及String