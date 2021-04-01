掌握Java生态系统、企业级架构和技术规范

学会使用Java标准技术栈实现互联网平台项目



Servlet 是一种基于 Java 技术的 Web 组件，用于生成动态内容，由容器管理

类似于其他 Java 技术组件，Servlet 是平台无关的 Java 类组成，并且由 Java Web服务器加载执行，通常由 Servlet 容器提供运行时环境

Servlet 容器，也称作为 Servlet 引擎，作为Web服务器或应用服务器的一部分，通过request和response提供Web 客户端交互的能力

容器管理Servlet实例以及它们的生命周期

| 规范版本    | 发布时间   | Java平台 | 主要更新                                                 |
| ----------- | ---------- | -------- | -------------------------------------------------------- |
| Servlet 4.0 | 2017年9月  | 8        | HTTP2支持                                                |
| Servlet 3.1 | 2013年5月  | 7        | 非阻塞IO，HTTP协议更新机制(Websocket)                    |
| Servlet 3.0 | 2009年12月 | 6        | 可插拔、简化部署、异步Servlet、安全、文件上传、注解(2.5) |

### Servlet

GenericServlet & HttpServlet

GET、POST、PUT、DELETE、HEAD、OPTIONS、TRACE

doPut 和 doDelete 方法允许 Servlet 开发人员让支持 HTTP/1.1 的客户端使用这些功能

doHead 方法可以认为是 doGet 方法的一个特殊形式，它仅返回由 doGet 方法产生的 header 信息

doOptions 方法返回当前 servlet 支持的 HTTP 方法(通过 Allow 响应头返回支持的 HTTP 操作，如 GET、POST)

doTrace 方法返回的响应包含 TRACE 请求的所有头信息

在非分布式环境下，容器对于每一个 Servlet 声明必须且只能产生一 个实例。如果 Servlet 实现了 SingleThreadModel 接口，容器可以选择实例化多个实例以便处理高负荷请求或者串行化请求到一个特定实例

在分布式环境下，容器可以为每个JVM的每个 Servlet 声明产生一个实例。如果Servlet 实现了SingleThreadModel 接口，此时容器可以为每个容器的 JVM 实例化多个 Servlet 实例

SingleThreadModel 接口的作用是保证一个特定Servlet实例的service方法在一个时刻仅能被一个线程执行

* 声明注册  web.xml  注解  API                 可以配置在容器启动时实例化(load-on-startup)，也可延迟实例化
* 初始化      Servlet#init(ServletConfig)
* 服务          Servlet#service(ServletRequest, ServletResponse)
* 销毁          Servlet#destroy()

### Filter

* 声明注册  web.xml  注解  API
* 初始化     Filter#init(FilterConfig)
* 过滤         Filter#doFilter(ServletRequest,ServletResponse,FilterChain) 
* 销毁         Filter#destroy()

### ServletContext

* 声明注册
* 初始化     ServletContextListener#contextInitialized 
* 销毁         ServletContextListener#contextDestroyed

### ServletContextListener

### ServletRequestListener

### HttpSessionListener

### ServerContainerInitializer


