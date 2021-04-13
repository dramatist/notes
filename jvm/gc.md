### GC

7、8：ParallelGC

9+：G1

引用计数：有环的时候导致内存泄漏、内存溢出

标记清除算法：Marking and Sweep：从根对象出发，遍历可达对象，并在本地内存中记录，可以处理循环依赖，且只扫描部分对象

除了清除，还要做压缩，使内存连续，要STW，让全世界停下

GC roots：

1. 正在执行的方法的局部变量和输入参数
2. 活动线程
3. 所有类的静态字段
4. JNI引用

#### Serial GC 和 Parallel GC

Serial GC：对年轻代使用标记复制算法，对老年代使用标记清除整理算法，只适用于几百兆的堆，且是单核CPU时比较有限

Parallel GC：对年轻代使用标记复制算法，对老年代使用标记清除整理算法，-XX:ParallelGCThreads配置GC线程数，默认为CPU核心数

CMS：对年轻代使用并行STW的标记复制算法，对老年代使用并发标记清除算法，避免在老年代出现长时间的卡顿，不对老年代整理，通过空间列表free list来管理内存空间的回收，在标记清除阶段，大部分工作和工作线程一起并发执行，CMS使用的线程数通常为CPU核心数的1/4，六个阶段：

1. Initial Mark

2. Concurrnet Mark

3. Concurrent Preclean

4. Final Mark

5. Concurrent Sweep

6. Concurrent Reset

### G1

Garbage-First，把GC STW停顿的时间和分布是可配置和可预期的，不区分老年代和年轻代，，而是划分为通常为2048个可以存放对象的小堆区

