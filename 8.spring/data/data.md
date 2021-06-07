数据源 DataSource

事务：PlatformTransactionManager(DataSourceTransactionManager)

操作：JdbcTemplate



DataSourceAutoConfiguration

DataSourceTransactionManagerAutoConfiguration

JdbcTemplateAutoConfiguration

### 事务抽象

一致的事务模型

JDBC/Hibnernate/Mybatis

DataSource/JTA



PlatformTransactionManager

* DataSourceTransactionManager
* HibernateTransactionManager
* JtaTransactionManager



TransactionDefinition

* Propagation 传播
* Isolation
* Timeout
* Read only status

#### 事务传播特性

| 传播性                    | 值   | 描述                                   |
| ------------------------- | ---- | -------------------------------------- |
| PROPAGATION_REQUIRED      | 0    | 当前有事务就用当前的，没有就用新的     |
| PROPAGATION_SUPPORTS      | 1    | 事务可有可无，不是必须的               |
| PROPAGATION_MANDATORY     | 2    | 当前一定要有事务，不然就抛异常         |
| PROPAGATION_REQUIRES_NEW  | 3    | ⽆论是否有事务，都起个新的事务         |
| PROPAGATION_NOT_SUPPORTED | 4    | 不⽀持事务，按⾮事务⽅式运行           |
| PROPAGATION_NEVER         | 5    | 不支持事务，如果有事务则抛异常         |
| PROPAGATION_NESTED        | 6    | 当前有事务就在当前事务⾥再起⼀一个事务 |

#### 事务隔离特性

| 隔离性                     | 值   | 脏读 | 不可重复读 | 幻读 |
| -------------------------- | ---- | ---- | ---------- | ---- |
| ISOLATION_READ_UNCOMMITTED | 1    | √    | √          | √    |
| ISOLATION_READ_COMMITTED   | 2    | ×    | √          | √    |
| ISOLATION_REPEATABLE_READ  | 3    | ×    | ×          | √    |
| ISOLATION_SERIALIZABLE     | 4    | ×    | ×          | ×    |

#### JDBC异常

统一为DataAccessException

SQLErrorCodeSQLExceptionTranslator

默认配置 org/springframework/jdbc/support/sql-error-codes.xml

自定义配置 classpath：sql-error-codes.xml