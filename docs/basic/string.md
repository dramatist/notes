# String

Java8及之前内部使用char数组，Java9之后使用byte数组，并使用byte coder表示编码

## CharSequence

接口 CharSequence 从 CharBuffer、String、StringBuffer、StringBuilder类中抽象出了字符序列的一般化定义

## String +

String不可变，每次修改都会创建新的对象

StringBuffer线程安全，开销大

StringBuilder线程不安全，性能高

两个字符串常量进行+，编译器进行常量折叠

+操作会被编译器使用StringBuilder的append方法替代，在循环中使用+会导致大量创建StringBuilder

## String长度限制

运行时限制：数组最大长度为Integer#MAX_VALUE，String内部使用char数组，运行时最大长度为Integer#MAX_VALUE，约为4GB

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

JDK5 引入了 `format()` 方法，可用于 `PrintStream` 或者 `PrintWriter` 对象

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