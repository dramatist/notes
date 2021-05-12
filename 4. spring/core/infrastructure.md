### i18n

* 普通国际化文案
* Bean Validation校验国际化文案
* Web站点页面渲染
* Web MVC错误提示

#### Java标准国际化

ResourceBundle

* PropertiesResourceBundle  常用
* ListResourceBundle

设计

* key-value、层次性
* 缓存
* 字符编码控制：java.util.ResourceBundle.Control
* Control SPI扩展：java.util.spi.ResourceBundleControlProvider

#### Java文本格式化

MessageFormat 非线程安全

格式{ArgIndex [,FormatType]  [,FormatStyle]}

formatType：number、date、time、choice

FormatStyle：short、medium、long、full、integer、currency、percent

* 重置Pattern：applyPattern
* 重置Locale：setLocale
* 重置Format：setFormat

#### Spring国际化

MessageSource

主要实现

* ResourceBundleMessageSource：基于ResourceBundle+MessageFotmat

* ReloadableResourceBundleMessageSource：基于Properties+MessageFormat

层次性：HierarchicalMessageSource

* 文案模版编码code
* 文案模版参数args
* 区域Locale

### Validation

Spring 常规校验 Validator

Spring 数据绑定 DataBinder

Spring Web参数绑定 WebDataBinder

Spring WebMVC/WebFlux 方法参数校验

#### Validator

org.springframework.validation.Validator：校验器

* supports(Class)：类型是否能校验
* validate(Object, Errors)：校验对象，并将校验失败内容输出到Errors

org.springframework.validation.ValidationUtils：工具类

#### Errors

org.springframework.validation.Errors：错误收集器

* reject：收集对象错误文案
* rejectValue：收集对象字段错误文案

ObjectErrors、FieldErrors

#### 和Bean Validation整合

JSR303、JSR349

LocalValidatorFactoryBean，不是FactoryBean的实现类

MethodValidationPostProcessor

### Data Binding

Spring BeanDefinition 到 Bean

Spring DataBinder

Spring WebDataBinder

### Type Conversion

