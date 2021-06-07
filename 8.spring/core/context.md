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

### 容器Lifecycle

* 启动   AbstractApplicationContext#refresh
* 运行
* 停止  AbstractApplicationContext#close