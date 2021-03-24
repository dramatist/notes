### Util

#### 随机数

Random    ThreadLocalRandom    SplittableRandom

System    Runtime



### 规范

1. 使用y而不是Y进行日期格式化，使用Y时如果当前日期所在周包含下一年的日期，可能年份会被格式化为下一年
2. 

### Security

Java提供了三种机制确保安全

1. 语言设计特性：数组边界检查，受检的类型转换，无指针等
2. 访问控制机制：用于控制代码能够执行的操作，如文件访问，网络访问
3. 代码签名

# 编码

ASCII American Standard Code for Information Interchange，等同于国际标准ISO/IEC646

Unicode：为每一个字符定义一个码点(code point)，属于编码字符集，使用4个字节，但未规定如何存储编码

UTF-8：使用一至四个字节进行编码存储，根据具体字符的编码确定

UTF-16：使用两个或四个字节进行编码存储

UTF-32：使用四个字节进行编码存储

UTF-16和UTF-32有大端序和小端序

在几乎所有机器上，多字节对象存储空间都是连续的，字节的顺序分为大端序Big Endian和小端序Little Endian，大端序及低地址端存放高位字节，小端序相反

0x12345678     大端序：12345678    小端序：78563412

Java及网络传输采用的是大端序，C/C++使用的是小端序

properties文件读取编码为IOS 8859-1，读取中文乱码