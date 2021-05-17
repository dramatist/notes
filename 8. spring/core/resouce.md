### Java标准资源管理

Java标准资源定位

| 职责       | 说明                                      |
| ---------- | ----------------------------------------- |
| 面向资源   | 文件系统、artifact、远程资源(HTTP、FTP)   |
| API整合    | ClassLoader#getResource、File、URL        |
| 资源定位   | URL、URI                                  |
| 面向流存储 | URLConnection                             |
| 协议扩展   | URLStreamHandler、URLStreamHandlerFactory |

sun.net.www.${protocol}.Handler

### Spring资源接口

| 类型       | 接口              |
| ---------- | ----------------- |
| 输入流     | InputStreamSource |
| 只读资源   | Resource          |
| 可写资源   | WriteableResouce  |
| 编码资源   | EncodedResouce    |
| 上下文资源 | ContextResource   |

内建实现

| 资源来源       | 资源协议                  | 实现类                 |
| -------------- | ------------------------- | ---------------------- |
| Bean定义       | 无                        | BeanDefinitionResource |
| 数组           | 无                        | ByteArrayResource      |
| 类路径         | claspath:/                | ClassPathResource      |
| 文件系统       | file:/                    | FileSystemResource     |
| URL            | URL支持的协议:http、ftp等 | UrlResource            |
| ServletContext | 无                        | ServletContextResource |

### ResourceLoader

DefaultResourceLoader

* FileSystemResourceLoader
* ClassPathRelativeResourceLoader
* AbstractApplicationContext

ResourcePatternResolver

* PathMatchingResourcePatternResolver

PathMatcher

* AntPathMatcher

Resource注入

* @Value可以注入Resource及其数组集合

ResourceLoader注入

* ResourceLoaderAware
* Autowired
* 注入ApplicationContext作为ResourceLoader

