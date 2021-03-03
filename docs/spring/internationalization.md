### Java标准国际化

ResourceBundle

* PropertiesResourceBundle  常用
* ListResourceBundle

设计

* key-value
* 层次性
* 缓存
* 字符编码控制：java.util.ResourceBundle.Control
* Control SPI扩展：java.util.spi.ResourceBundleControlProvider

### Java文本格式化

MessageFormat 非线程安全

格式{ArgIndex [,FormatType]  [,FormatStyle]}

formatType：number、date、time、choice

FormatStyle：short、medium、long、full、integer、currency、percent

### 应用场景

* 普通国际化文案
* Bean Validation校验国际化文案
* Web站点页面渲染
* Web MVC错误提示

### Spring国际化

MessageSource

主要实现

* ResourceBundleMessageSource

* ReloadableResourceBundleMessageSource

层次性：HierarchicalMessageSource

使用

* 文案模版编码code
* 文案模版参数args
* 区域Locale

