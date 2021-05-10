### equals&hashcode

equals特性

1. 反身性：x.equals(x) = true 
2. 对称性：x.equals(y) = y.equals(x)
3. 传递性:   x.equals(y) & y.equals(z) ==> x.equals(z)
4. 一致性：多次调用x.equals(y)结果相同
5. x.equals(null) === false

hashCode() 和 equals() 必须能够允许类型在hash数据结构中正常工作

散列码应该是均匀的，更关注速度而非唯一

多字段对象：Objects.hash()      单字段对象：Objects.hashcode()

散列表中的槽位slot通常被称为桶位bucket，为了使散列表分布更均匀，需要选择合适的散列通容量。

事实证明，质数实际上并不是散列桶的理想容量。近来，Java的散列桶都使用2的n次方。

现代处理器中除法与求余数是最慢的操作。当length为2的n次方时，hash & (length - 1) == hash % length 

### clone

必须实现了Cloneable的类才能clone

浅拷贝：默认clone方法会创建一个新对象，但对象内的变量不会clone

深拷贝：创建一个新对象，并且原对象内非基本类型的变量也会clone