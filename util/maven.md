## 简介

### 概念

项目构建、依赖管理、项目信息管理

除了编码，所进行的编译、单元测试、生成文档、打包和部署等工作，就是构建

约定优于配置，抽象了构建的生命周期模型

Maven世界中，任何一个依赖、插件、或者项目构建的输出，称为构件

MAVEN_OPTS：类似JAVA_OPTS

### 目录

> -bin    Maven运行脚本，用来配置Java命令，准备classpath和相关Java系统属性
>
> ​			  mvn  mvnDebug：在运行Maven时开启debug，以便调试Maven本身  m2.conf : classworlds的配置文件
>
> -boot   plexus-classworlds-version.jar    plexus-classworlds.license
>
> ​			  plexus-classworlds是一个类加载器框架，比默认Java类加载器提供更丰富的语法方便配置
>
> -conf   包含setting.xml  全局定制Maven
>
> -lib     包含Maven运行所需的Java类库

### HTTP Proxy

```xml
<proxies>
    <proxy>
        <id></id>
        <active></active>
        <protocol></protocol>
        <host></host>
        <port></port>
        <!-- below is alternative -->
        <username></username>  
        <password></password>
        <!--不需要代理的主机名 用|分隔  如*.google.com -->
        <nonProxyHosts></nonProxyHosts>  
    </proxy>
</proxies>
```

### Project Object Model（POM）

定义项目信息，描述项目如何构建，声明项目依赖

modelVersion指明POM版本

项目骨架 archetype：基本的目录结构和pom文件内容

## 坐标

构件完整坐标

- groupId：定义当前Maven项目隶属的实际项目
- artifactId：定义实际项目中一个Maven项目(模块)
- version：定义Maven项目当前版本
- packaging：定义Maven项目打包方式
- classifier：定义构建输出的附属构件 如xxx-javadoc.jar  xxx-source.jar

构件的文件名：artifactId-version [-classifier].packaging

classifier只能由插件生成

### 依赖

依赖完整坐标

- groupId ：基本
- artifactId：基本
- version：基本
- type：对应项目坐标定义的packaging
- scope：依赖的范围
- optional：标记依赖是否可选
- exclusions：排除传递依赖

### 依赖范围

三套classpath：编译classpath  测试classpath  运行classpath

- compile：默认。对编译、测试、运行都有效
- test：只对测试有效
- provided：编译、测试有效。如servlet-api
- runtime：测试、运行有效。如JDBC驱动
- system：和provided一致，但与本机系统绑定，要慎用
- import：不会对编译、测试、运行产生影响，只能用于dependencyManagement 。通常指向一个pom，将其中的dependencyManagement配置导入并合并到当前pom的dependencyManagement中

### 依赖性传递

Maven解析直接依赖的pom，将必要的间接依赖，以传递性依赖的形式引入当前项目

最左边第一列为直接依赖，最上边第一行为间接依赖，交点为传递性依赖范围

|          | compile  | test  | provided | runtime  |
| :------: | :------: | :---: | :------: | :------: |
| compile  | compile  | ----- |  -----   | runtime  |
|   test   |   test   | ----- |  -----   |   test   |
| provided | provided | ----- | provided | provided |
| runtime  | runtime  | ----- |  -----   | runtime  |

### 依赖调解

依赖调解第一原则：路径最近者优先

依赖调解第二原则：第一声明者优先

### 可选依赖

可选依赖不会被传递。如A依赖B，B有C、D两个可选依赖，C、D对A无影响。

## 仓库

### 布局

任何一个构件都有一个唯一的坐标，根据这个坐标可以定义其在仓库中的唯一存储路径，这就是Maven的仓库布局方式。

groupId/artifactId/version/artifactId-version[-classifier].packaging

本地仓库、远程仓库、镜像

远程仓库：

- 中央仓库：默认的远程仓库，包含绝大多数开源Java构件，及源码、作者信息、SCM、许可证信息等
- 私服：架设在局域网内的仓库服务，代理广域网上的远程仓库   Nexus

### 远程仓库配置

```xml
<project>
    <repositories>
        <repository>
        <id></id>
        <name></name>
        <url></url>
        <releases><enabled>true</enabled></releases>
        <snapshots><enabled>false</enabled></snapshots>
        <layout>default</layout>
      </repository>
    </repositories>
</project>
```

对于releases和snapshots，还包含updatePolicy和checksumPolicy两个子元素

updatePolicy

- daily：每天检查一次更新
- never：从不检查更新
- always：每次构建都检查更新
- interval:X 每隔X分钟检查一次更新

checksumPolicy

- ignore：使Maven忽略校验和错误
- warn：如果检验和验证失败，在构建时输出警告信息
- fail：如果检验和验证失败，则构建失败

### 远程仓库认证

```xml
<setting>
  	<servers>
    	<server>
      		<id></id>
      		<username></username>
      		<password></password>
        </server>
  	</servers>
</setting>
```

### 将构件部署至远程仓库

```xml
<project>
    <distributionManagement>
        <repository>
            <id>project-release</id>
            <name>Release Repository</name>
            <url></url>
        </repository>
        <snapshotRepository>
            <id>project-snapshot</id>
            <name>Snapshot Repository</name>
            <url></url>
        </snapshotRepository>
    </distributionManagement>
</project>
```

### Mirror

如果仓库X可以提供仓库Y存储的所有内容，可以认为X是Y的一个镜像

编辑setting.xml，使用镜像替换中央仓库

```xml
<settings>
  	<mirrors>
    	<mirror>
     		<id></id>
     		<name></name>
      		<url></url>
      		<mirrorOf>central</mirrorOf>
    	</mirror>
  	</mirrors>
</settings>
```

## 生命周期

Maven的生命周期是抽象的，其实际行为由插件完成

包含了项目的请理、初始化、编译、测试、打包、集成测试、验证、部署和站点生成等几乎所有构建步骤

Maven有三套生命周期：clean、default、site，对应清理项目、构建项目、建立项目站点

每个生命周期包含一些有顺序的阶段(phase)，后面的阶段依赖前面的阶段。

### clean

- pre-clean：执行一些清理前需要完成的工作
- clean：清理上一次构建生成的文件
- post-clean：执行一些清理后需要完成的工作

### default

- validate：验证项目正确无误，并提供所有必要的信息。
- initialize：初始化构建状态，例如设置属性或创建目录。
- generate-sources：
- process-sources：处理源代码，如过滤
- generate-resources：
- process-resources：处理项目主资源文件。一般是对src/main/resources中的内容进行变量替换等工作后，复制到主classpath中
- compile：编译项目的主源码。一般是编译src/main/java中的Java文件至主classpath中
- process-classes：对编译后生成的文件进行后处理，例如对Java类进行字节码增强
- generate-test-sources：
- process-test-sources：处理测试源代码
- generate-test-resources
- process-test-resources：处理项目测试资源文件。一般是对src/test/resources中的内容进行变量替换等工作后，复制到测试classpath中
- test-compile：编译项目的测试代码。一般是编译src/test/java中的Java文件至测试classpath中
- process-test-classes：从测试编译中对生成的文件进行后处理，例如对Java类进行字节码增强
- test：使用单元测试框架运行测试
- prepare-package：在实际包装之前执行准备包装所需的任何操作。
- package：接受编译好的代码，打包为可发布的格式，如jar
- pre-integration-test：在执行集成测试之前执行所需的操作。这可能包括设置所需环境
- integration-test：处理该程序包，并在必要时将其部署到可以运行集成测试的环境中
- post-integration-test：在执行集成测试后执行所需的操作。这可能包括清理环境
- verify：运行检查以确认package有效并符合质量标准
- install：将包安装到本地仓库
- deploy：将最终的包复制到远程仓库

### site

- pre-site：执行一些在生成项目站点之前需要完成的工作
- site：生成项目站点文档
- post-site：执行一些在生成项目站点之后需要完成的工作
- site-deploy：将生成的项目站点发布到服务器上

### plugins

goal：插件的每个功能称为一个goal

mvn 插件:goal     eg: mvn compiler:compile

Maven的生命周期和插件相互绑定，以完成实际的构建任务。具体来说，是生命周期的phase和插件的goal相互绑定，Maven为一些主要的生命周期阶段绑定了很多插件的目标，开箱即用

当多个插件目标绑定到同一个阶段，这些插件声明的先后顺序决定了目标的执行顺序

自定义绑定插件目标:  创建项目的源码jar包

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <version>3.2.0</version>
            <executions>
              	<execution>
                	<id>attach-source</id>
                	<phase>verify</phase>
                	<goals>
                  		<goal>jar-no-fork</goal>
                	</goals>
              	</execution>
            </executions>
    	</plugin>
  	</plugins>
</build>
```

命令行配置插件：在使用mvn命令时使用-D参数，伴随一个键=值的形式，配置插件目标的参数

**eg： mvn install -Dmaven.test.skip=true**

## 聚合和继承

### 聚合

```xml
<project>
    <modules>
        <module></module>
        <module></module>
    </modules>
</project>
```

每一个module是相对本pom的路径

### 继承

```xml
<project>
    <parent>
        <groupId></groupId>
        <artifactId></artifactId>
        <version></version>
        <reletivePath>../xxx/pom.xml</reletivePath>
    </parent>
</project>
```

先检查relativePath，如果能找到父POM，则完成，否则在本地仓库查找

relativePath默认为../pom.xml

Maven有一个超级pom，任何一个Maven项目都隐式继承自该pom(约定优于配置)

文件路径：$MAVEN_HOME$/lib/maven-model-builder-x.x.x.jar

### 依赖继承

可继承的pom元素：

| 元素                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| groupId                | 项目组Id                                                     |
| version                | 项目版本                                                     |
| description            | 项目描述信息                                                 |
| organization           | 项目组织信息                                                 |
| url                    | 项目的url地址                                                |
| developers             | 项目的开发者信息                                             |
| contributors           | 项目的贡献者信息                                             |
| inceptionYear          | 项目的创建年份                                               |
| distributionManagement | 项目的部署配置                                               |
| issueManagement        | 项目的缺陷跟踪系统信息                                       |
| ciManagement           | 项目的持续集成系统信息                                       |
| scm                    | 项目的版本控制系统信息                                       |
| mailingLists           | 项目的邮件列表信息                                           |
| properties             | 自定义的Maven属性                                            |
| dependencies           | 项目的依赖配置                                               |
| dependencyManagement   | 项目的依赖管理                                               |
| repositories           | 项目的仓库配置                                               |
| build                  | 包括项目的源码目录配置、输出目录配置、插件配置、插件管理配置等 |
| reporting              | 包括项目的报告输出目录配置、报告插件配置等                   |

### 依赖管理

可以在父pom使用dependencies或dependencyManagement

使用dependencies会使某些子模块引入不需要的依赖，不推荐使用

使用dependencyManagement不会使子模块引入实际的依赖，但可以约束子模块依赖的版本、范围等

import依赖范围只在dependencyManagement元素下有效果。该依赖范围通常指向一个pom，作用是将目标pom中的dependencyManagement配置导入合并到当前pom的dependencyManagement

### 插件管理

通过pluginManagement进行插件管理，类似dependencyManagement

```xml
<project>
    <build>
    	<pluginManagement>
      		<plugins>
        		<plugin></plugin>
      		</plugins>
    	</pluginManagement>
  	</build>
</project>
```

### 反应堆

在一个多模块Maven项目中，反应堆(Reactor)是指所有模块组成的一个构建结构

反应堆包含了各模块之间继承与依赖的关系，从而能自动计算出合理的模块构建顺序

模块间的依赖关系会将反应堆构成一个有向无环图(DAG),如果出现循环，则Maven报错

裁剪反应堆：仅构建完整反应堆中的某些模块

- -am    同时构建所列模块的依赖模块
- -amd   同时构建依赖于所列模块的模块
- -pl      构建指定模块，以逗号分隔
- -rf     使反应堆从指定的模块开始构建

## 灵活的构建

### properties

project属性:

| 属性                              | 含义                                                        |
| --------------------------------- | ----------------------------------------------------------- |
| project.baseDir                   | pom所在路径                                                 |
| project.build.sourceDirectory     | 源代码路径                                                  |
| project.build.testSourceDirectory | 测试源代码路径                                              |
| project.build.directory           | 构建输出目录 默认target/                                    |
| project.outputDirectory           | 源代码编译输出路径                                          |
| project.testOutputDirectory       | 测试源代码编译输出路径                                      |
| project.groupId                   | groupId                                                     |
| project.artifactId                | artifactId                                                  |
| project.version                   | version                                                     |
| project.build.finalName           | 构建输出文件名 默认${project.artifactId}-${project.version} |

settings属性: 如${settings.localRepository}   从setting.xml中读取

JVM系统属性: 如${user.home}

操作系统环境变量: env.开头 如${env.JAVA_HOME}

自定义属性：\<properties\>\</properties\>

内置属性：${basedir}   ${version}

使用**mvn help:system**查看系统属性和环境变量

### profile

```xml
<profiles>
  	<profile>
    	<activation>
      		<activeByDefault>true</activeByDefault>
    	</activation>
    	<id>local</id>
    	<properties>
      		<profile.dir>${profiles.dir}/local</profile.dir>
      		<profile.active>local</profile.active>
        </properties>
  	</profile>
  	<profile>
    	<id>dev</id>
    	<properties>
      		<profile.dir>${profiles.dir}/dev</profile.dir>
      		<profile.active>dev</profile.active>
    	</properties>
  	</profile>
</profiles>
<build>
  	<resources>
    	<resource>
      		<directory>${profile.dir}</directory>
      		<filtering>true</filtering>
            <targetPath></targetPath>
    	</resource>
  	</resources>
    <testresources>
    </testresources>
</build>
```

开启资源过滤,使得资源中的maven属性能被maven解析

mvn clean install -Plocal,dev   使用local和dev的profile

mvn help:active-profiles

mvn help:all-profiles

## 常用Maven插件

maven-clean-plugin

maven-compile-plugin

maven-jar-plugin

maven-source-plugin

maven-resource-plugin

maven-dependency-plugin

maven-assembly-plugin

## Jenkins

