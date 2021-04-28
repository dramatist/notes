### 配置

* BeanDefinition配置
    * 基于XML/Properties
    * 基于Groovy DSL
    * 基于Java注解
    * 基于JavaAPI
* 容器配置
    * 基于XML
    * 基于Java注解
    * 基于JavaAPI
* 外部化配置
    * 基于Java注解

### 外部化配置

注解

* @PropertySource

* @PropertySources

API

* PropertySource

* PropertySources

未提供Yaml直接支持，可使用YamlProcessor

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

