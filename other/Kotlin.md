## Kotlin

简洁 安全 务实  与Java代码互操作

服务端开发

原生 (IOS Android Windows Linux WatchOS等)

Web全栈(编译为JavaScript)

### 函数式编程

头等函数：把函数当作值使用，可以用变量保存，可以当作参数传递，或其他函数的返回值

不可变性：使用不可变对象，其状态在创建后不可改变

无副作用：使用的是纯函数，在输入相同时会产生同样的结果，不会修改其他对象的状态，不和外面的世界交互

简洁  多线程安全



### 基本

#### 语句和表达式

表达式有值  语句无值

在Java中 一切逻辑控制都是语句   赋值是表达式

在kotlin中，除循环外大多数控制结构为表达式  赋值为语句

Kotlin没有数值隐式转换

== 相当于 java 中的调用 equals 方法。比较两个引用的相等性或者等同性

=== 相当于 java 中的 ==。比较两个引用的同一性

#### 位运算

shl     左移

shr    有符号右移

ushr  无符号右移

and   or    xor     inv

函数

fun name(arg:type,arg:type):type {}                                    代码块体

fun name(arg:type,arg:type):type =  表达式                       表达式体

#### 字符串

println("Hello,$name!")   

println("Hello,${args[0]}")   

println("Hello,${if(args.size>0) args[0] else "world"}")

原生字符串"""     """

