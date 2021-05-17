### Environment

#### Profile

一组bean definitions，由Environment决定哪些profile是active的

@Profile("production | test")   @Profile("production & test")    还可使用感叹号，表示否

& 与 ｜ 混用时必须有括号

spring.profiles.active指定激活的profile

spring.profiles.default指定默认profile

#### Properties

JVM参数、系统环境变量、命令行参数、properties文件、yml文件等

PropertySource：对任意key-value类型的抽象

Spring StandardEnvironment：System.getProperties和System.getEnv

PropertySource的解析是层次性的，高层次优先

@PropertySource导入的文件，若有同名属性，最后加载的优先

### 外部化配置

注解

- @PropertySource
- @PropertySources

API

- PropertySource
- PropertySources

未提供Yaml直接支持，可使用YamlProcessor