## 配置

* BeanDefinition配置
    * 基于XML/Properties
    * 基于Java注解
    * 基于JavaAPI
    * Groovy DSL
* 容器配置
    * 基于XML
    * 基于Java注解
    * 基于JavaAPI
* 外部化配置
    * 基于Java注解

### 配置元信息

BeanDefinition---------Bean配置元信息

PropertyValues--------Bean属性元信息

PropertySource-------外部化配置元信息

@Profile------------------Profile元信息

IOC容器元信息

### BeanDefinition

GenericBeanDefinition：通用BeanDefinition

RootBeanDefinition：无parent的或合并后的BeanDefinition

AnnotatedBeanDefinition：注解标注的BeanDefinition

### Bean属性元信息

PropertyValues

* 可变实现：MutablePropertyValues
* 内部元素：PropertyValue   1-----N

附加信息：

* AttributeAccessor：BeanDefinition的辅助信息

* BeanMetadataElement：BeanDefinition的Source

### 容器配置元信息

Beans

* profile  
* default-lazy-init  
* default-autowire  
* default-autowire-candidates  
* default-init-method  
* default-destroy-method  
* default-merge

Context

* component-scan
* annotation-config
* load-time-weaver
* property-placeholder
* property-override
* mbean-export
* mbean-server

### BeanDefinition解析

XmlBeanDefinitionReader

PropertiesBeanDefinitionReader

AnnotatedBeanDefinitionReader

* 条件评估@Conditional：ConditionEvaluator
* Bean范围解析：ScopeMetadataResolver
* BeanDefinition解析：内部
* BeanDefinition处理：AnnotationConfigUtils.processCommonDefinitionAnnotations

BeanDefinitionRegistry

### 外部化配置

注解

* @PropertySource

* @PropertySources

API

* PropertySource

* PropertySources

PropertyPropertySource

未提供Yaml直接支持，可使用YamlProcessor