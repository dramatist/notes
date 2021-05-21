一款优秀的持久层ORM框架

支持自定义 SQL、存储过程以及高级映射，免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作

可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO为数据库中的记录



SqlSessionFactoryBuilder

SqlSessionFactory

SqlSession 线程不安全

### Configuration

规定了XML中属性的顺序，配置需要按顺序写

1. properties
    * 首先读取在 properties 元素体内指定的属性
    * 然后根据 properties 元素中的 resource 属性或url 属性指定的路径读取属性文件，并覆盖之前读取过的同名属性
    * 最后读取作为方法参数传递的属性，并覆盖之前读取过的同名属性
2. settings
    * cacheEnabled
    * lazyLoadingEnabled
    * ...
3. typeAlias
    * \<typeAlias type="" alias=""/>
    * \<typeAlias package=""/>  扫描包，别名为类名首字母小写或@Alias指定
4. typeHandlers
    * 通过TypeHandler接口或BaseTypeHandler抽象类扩展
5. objectFactory
    * 创建结果对象的新实例时，会使用一个ObjectFactory实例来完成实例化工作，可通过DefaultObjectFactory扩展
6. plugin
7. environments
    * transactionManager  JDBC和MANAGED(几乎没做什么配置)，Spring环境下无需配置，会使用自带的管理器覆盖
    * dataSource   UNPOOLED、POOLED、JNDI(过时)，可通过扩展DataSourceFactory或UnpooledDataSourceFactory使用自定义数据源实现
8. databaseIdProvider
9. mappers

### 映射文件

resultMap

select

insert

update

delete

sql
