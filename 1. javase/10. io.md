### IO模型

#### 阻塞IO模型

同步阻塞

#### IO多路复用模型

也称事件驱动IO，同步阻塞

#### 非阻塞IO模型

同步非阻塞

#### 信号驱动IO模型

同步非阻塞

#### 异步IO模型

异步非阻塞

### IO

通常把 **nio**理解为**non-blocking**非阻塞 **io**(**io**就是*input/output输入/输出*)。

文件操作的两个基本组件：

1. 文件或者目录的路径；
2. 文件本身。

#### 文件或目录路径

一个 **Path** 对象表示一个文件或者目录的路径，是一个跨操作系统（OS）和文件系统的抽象

**Files**和**Paths**两个工具类

#### Paths的增减修改

使用 **relativize()** 移除 **Path** 的根路径，使用 **resolve()** 添加 **Path** 的尾路径(不一定是“可发现”的名称)

#### 文件系统

可以使用静态的 **FileSystems** 工具类获取"默认"的文件系统，也可以在 **Path** 对象上调用 **getFileSystem()** 以获取创建该 **Path** 的文件系统

一个 **FileSystem** 对象也能生成 **WatchService** 和 **PathMatcher** 对象

#### 路径监听

通过 **WatchService** 可以设置一个进程对目录中的更改做出响应

#### 文件查找

通过在 `FileSystem` 对象上调用 `getPathMatcher()` 获得一个 `PathMatcher`，然后传入模式。模式有两个选项：`glob` 和 `regex`

#### 文件读写

`Files.readAllLines()` 一次读取整个文件（因此，“小”文件很有必要），产生一个`List<String>`

`Files.write()` 被重载以写入 `byte` 数组或任何 `Iterable` 对象

`Files.lines()` 方便地将文件转换为行的 `Stream`

### Netty

异步、事件驱动的基于NIO的网络应用开发框架

适用于服务端、客户端、TCP/UDP

高吞吐、低延迟、低开销、零拷贝、可扩容