# 函数式编程

编程范式：

* 命令式编程    命令式程序就是一个冯诺依曼机的指令序列
* 函数式编程    更加适用于复杂数据处理，高并发的环境
    * 函数是一等公民，也就是函数和变量等其他数据类型一样使用
    * 没有副作用，函数保持独立，和外部的交互仅限于 **函数参数** 和 **返回值**
* 逻辑式编程

OO（object oriented，面向对象）是抽象数据，FP（functional programming，函数式编程）是抽象行为。

## 函数式接口

@FunctionalInterface        java.util.function.*

default方法和Object中非final的public方法不参与统计

基本命名准则：

1. 如果只处理对象而非基本类型，名称则为 `Function`，`Consumer`，`Predicate` 等。参数类型通过泛型添加。
2. 如果接收的参数是基本类型，则由名称的第一部分表示，如 `LongConsumer`，`DoubleFunction`，`IntPredicate` 等，但基本 `Supplier` 类型例外。
3. 如果返回值为基本类型，则用 `To` 表示，如 `ToLongFunction <T>` 和 `IntToLongFunction`。
4. 如果返回值类型与参数类型一致，则是一个运算符：单个参数使用 `UnaryOperator`，两个参数使用 `BinaryOperator`。
5. 如果接收两个参数且返回值为布尔值，则是一个谓词（Predicate）。
6. 如果接收的两个参数类型不同，则名称中有一个 `Bi`。

## 闭包

Closure  

支持闭包：语言自动解决对外部变量的引用问题

只要有内部类，就会有闭包（Lambda 只是简化了闭包操作）

从 Lambda 表达式引用的局部变量必须是 final 或者是等同 final 效果的

高阶函数：消费或产生函数的函数

柯里化：将一个多参数的函数，转换为一系列单参数函数

## Stream

通过放弃对迭代过程的控制，把控制权交给并行化机制。

流是懒加载的。这代表着它只在绝对必要时才计算。你可以将流看作“延迟列表”。由于计算延迟，流使我们能够表示非常大（甚至无限）的序列，而不需要考虑内存问题。

流操作的类型有三种：创建流，修改流元素（中间操作， Intermediate Operations），消费流元素（终端操作， Terminal Operations）。最后一种类型通常意味着收集流元素（通常是到集合中）。

流只能消费一次

#### 流创建

Stream.of(T... values)

Collction.stream()

Arrays.stream()

Random.ints()  longs() doubles()  随机数流

IntStream/LongStream/DoubleStream

Stream.generate()，它可以把任意  Supplier\<T\>用于生成 `T` 类型的流。

Stream.iterate() 以种子（第一个参数）开头，并将其传给方法（第二个参数）。方法的结果将添加到流，并存储作为第一个参数用于下次调用 iterate()，依次类推。

流的建造者模式：Stream.Builder\<String\> builder = Stream.builder()

#### 中间操作

`peek`：用来查看流中的元素

`sorted`：对流元素排序

`distinct`：消除流中重复元素，比创建Set集合高效

`filter(Predicate)`：保留返回为true的元素

`map(Function)`：将函数操作应用在输入流的元素中，并将返回值传递到输出流中。

`mapToInt(ToIntFunction)`：操作同上，但结果是 **IntStream**。

`mapToLong(ToLongFunction)`：操作同上，但结果是 **LongStream**。

`mapToDouble(ToDoubleFunction)`：操作同上，但结果是 **DoubleStream**。

`flatMap(Function)`：当 `Function` 产生流时使用。

`flatMapToInt(Function)`：当 `Function` 产生 `IntStream` 时使用。

`flatMapToLong(Function)`：当 `Function` 产生 `LongStream` 时使用。

`flatMapToDouble(Function)`：当 `Function` 产生 `DoubleStream` 时使用。

`skip`：跳过流中的前n个元素

`limit`：取流中前n个元素

#### 终端操作

这些操作接收一个流并产生一个最终结果

##### 转换为数组

- `toArray()`：将流转换成适当类型的数组。
- `toArray(generator)`：在特殊情况下，生成器用于分配自定义的数组存储。

##### 循环

`forEach(Consumer)`    `forEachOrdered(Consumer)`

##### 匹配

`allMatch(Predicate)`     `anyMatch(Predicate)`    `noneMatch(Predicate)`

##### 信息

`count()`    `max(Comparator)`    `min(Comparator)`

##### 数字流信息

`average()`    `sum()`    `max()`     `min()`   

##### 元素查找

- `findFirst()`：返回一个含有第一个流元素的 **Optional**，如果流为空返回 **Optional.empty**。
- `findAny()`：返回含有任意流元素的 **Optional**，如果流为空返回 **Optional.empty**。

##### 组合所有流元素

- `reduce(BinaryOperator)`：使用 **BinaryOperator** 来组合所有流中的元素。因为流可能为空，其返回值为 **Optional**。
- `reduce(identity, BinaryOperator)`：功能同上，但是使用 **identity** 作为其组合的初始值。因此如果流为空，**identity** 就是结果。
- `reduce(identity, BiFunction, BinaryOperator)`：通常，你可以显式地组合 `map()` 和 `reduce()` 来更简单的表达它。

##### 收集

- `collect(Collector)`：使用 **Collector** 收集流元素到结果集合中。
- `collect(Supplier, BiConsumer, BinaryOperator)`：同上，第一个参数 **Supplier** 创建了一个新结果集合，第二个参数 **BiConsumer** 将下一个元素包含到结果中，第三个参数 BinaryOperator 用于将两个结果组合起来。

#### Collectors

Collectors.counting

Collectors.maxBy minBy

Collectors.summingInt   Collectors.averagingInt

Collectors.summarizingInt   获取元素个数、最大值、最小值、平均值、和

Collectors.joining    将元素toString后连接

Collectors.reducing

Collectors.groupingBy

Collectors.filtering

Collectors.mapping

Collectors.flatMapping

Collectors.partitioningBy

Collectors.collectingAndThen

#### Collector<T,A,R>

Supplier\<A\> supplier();       建立新的结果容器。调用supplier().get 返回一个空的累加器

BiConsumer<A,T> accumulator();   将元素添加到结果容器

Function<A,R> finisher();    对结果容器进行最终转换

BinaryOperator\<A\> combiner();      合并两个结果容器

Set\<Characteristics\> characteristics();    对流优化的提示

Characteristics是一个包含三个元素的枚举

1. UNORDERED               归约结果不受流中元素遍历和累积顺序的影响
2. CONCURRENT             accumulator函数可以并发调用，且该收集器可以并行归约流。如果收集器没有标明UNORDERED，则只能对无序数据源进行并行归约
3. IDENTIFY_FINISH        标明finsher返回的是一个恒等函数，可以跳过
