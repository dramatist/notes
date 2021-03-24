### 泛型

泛型类不能成为Throwable、Enum的子类

泛型类的静态上下文中不能使用泛型参数

一个类不能成为两个接口相同但参数不同的接口的子类

泛型的类型擦除只会擦除到第一个边界  未定义边界时擦除到Object

<T extends ClassA & InterfaceB> 类在前面，接口在后面

<? extends ClassA>   <? super ClassB>   <? >

由于泛型擦除，在继承时涉及到参数中包含泛型的方法，会生成桥方法，返回类型协变也是通过桥方法

虚拟机中通过参数类型和返回值确定一个方法

不能创建参数化类型的数组   eg： Pair\<String\> pair = new Pair\<String\> [10] 

对于在泛型中创建数组，使用 Array.newInstance() 是推荐的方式



