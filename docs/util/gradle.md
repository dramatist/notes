### About Gradle

#### What is Gradle

##### Overview

Gradle是一个开源的自动化构建工具，足够灵活，能构建几乎任何类型的软件。

* High performance 
* JVM foundation
* Convertions
* Extendsibility
* IDE support
* Insight：[build scan](https://scans.gradle.com/)

关于gradle你需要知道的五件事：

1. Gradle是一个通用的构建工具
2. 核心模型基于tasks：构建潜在地配置了一系列task，基于它们的依赖连接它们，形成有向无环图                                                       Tasks包含：

   * Actions：所要做的事情，如复制文件或编译源码
   * Inputs：actions使用或操作的值、文件或目录
   * Outputs：actions修改或生成的文件或目录
3. Gradle有几个固定的构建阶段

   * Initialization      初始化构建环境，决定哪些项目参与构建
   * Configuration    构建任务图DAGs
   * Execution
4. Gradle可以用多种方式扩展

   * Custom task types
   * Custom task actions
   * Extar properties on project and tasks
   * Custom Convertions
   * Custom Model
5. 构建脚本针对API进行操作

##### How to understand gradle builds

1. 项目是否有gradle wrapper，如果有，使用它
2. 运行gradle projects，确定它是单项目还是多项目工程
3. 运行gradle tasks，确定有哪些task可以运行
4. 获取task详细信息，运行 gradle help --task \<taskname\>
5. 运行感兴趣的task。许多基于约定的构建和gradle的lifecycle task集成，因此选择这些公共的task当你不需要对这个构建执行特别的事情。大多数构建都有 clean、assemble、check、build

##### 掌握gradle步骤

1. 掌握关于gradle你需要知道的五件事
2. 掌握gradle构建基础：projects、tasks、file API
3. 如果构建面向jvm，掌握这些项目类型的特性
4. 掌握gradle附带的核心插件，它们提供了许多开箱即用的功能
5. 掌握如何编写可维护的构建脚本，并最好地组织Gradle项目

gradle help --scan

gradle wrapper --gradle-version  version  升级gradle版本

#### Master Gradle build

Gradle中的一切都建立在两个基本概念之上: **projects**和**tasks**

每个Gradle构建由一个或多个projects组成，每个projects由一个或多个tasks组成

tasks可能包含编译、打包、生成Javadoc、发布构件等

一个构建脚本定义了一个project和它的tasks

```kotlin
tasks.register("hello") {
    doLast {
        println("hello ")
    }
}
tasks.register("world") {
    dependsOn("hello")
    doLast {
        println("world!")
    }
}
```











