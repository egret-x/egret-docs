---
title: 资源的缓存机制
createTime: 2024/09/11 09:50:34
permalink: /docs/cache/
---
## 一、资源的缓存机制

resources节点下配置的每个资源加载项，在第一次加载成功时会用name属性作为key缓存下来。以后再请求它时，都直接从缓存里取。如果有两个组都含有一个资源，第二个组再加载这个资源时，也会直接从缓存里得到结果，不会重复发起加载请求。

## 二、销毁缓存的资源

resource在第一次加载资源后，会缓存下来这个资源。使用RES.destroyRes(name:string):boolean，传入资源文件的name，即可清理对应的缓存。传入资源组名，即可清理整个资源组里所有资源对应的缓存。如果要销毁通过RES.getResByUrl(url)加载的资源，传入url作为name即可。

由于目前JS里没有弱引用字典，无法实现资源的自动回收，所以还需要手动去销毁缓存的资源。