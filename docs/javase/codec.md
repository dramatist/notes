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

URL编解码：RFC1738规定，除了字母、数字、$-_.+!*'(),、保留字，其它字符需要在url中编码，常用编码方式有escape，URLEncode，encodeURIComponent

properties文件读取编码为IOS 8859-1，读取中文乱码