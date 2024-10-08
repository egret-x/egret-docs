---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/bn9qrt76/
---
# 白鹭引擎 5.1.2 发布日志


---

白鹭引擎在 2017年 12 月份正式发布了 5.1 版本。本次版本是 5.1 版本的一次功能迭代，主要目标是添加对微信小游戏的支持以及添加 AssetsManager 资源管理器。



## 微信小游戏支持

白鹭引擎已经在 5.1.1 版本添加了对微信小游戏的支持，这项功能目前得到了大量开发者的积极使用和反馈，我们收集了不少开发者反馈，并添加了如下功能：

* 创建微信小游戏项目可以不传入 appid ，白鹭引擎会为开发者设置一个微信为开发者提供的默认值
* 添加了当前发布目标功能，开发者可以设置当前的发布目标。举例，如果将发布目标设置为 wxgame，开发者就至需进行 egret build / egret publish / egret run 而无需添加 --target wxgame 字段。
* 微信小游戏支持包更新至 1.0.4 版本，新项目模板添加了可以直接调用微信小游戏 API 的 Demo，并添加手动修改屏幕适配尺寸的 API
* 白鹭引擎项目模板升级，开发者无需再手动修改 ```scripts/config.ts```就可以自动生成小游戏项目
* 添加 ```egret run --target wxgame```命令，开发者可以通过调用这个命令直接启动微信web开发者工具对小游戏进行预览。 




由于添加了上述功能，我们强烈建议开发者使用白鹭引擎 5.1.2 版本进行微信小游戏的开发，不要再使用两周前发布的 5.1.1 版本。


## 资源管理器 AssetsManager


白鹭引擎在 4.0 版本引入了名为 ResourceManager 的资源管理器作为 RES 模块的替代方案。经过长达一年的用户反馈收集与功能迭代，我们在 5.1.2 版本中正式将 ResourceManager 作为创建新项目的默认模块，彻底取代 RES 模块，并将其正式改名为 AssetsManager 。


之前的 ResourceManager 模块与 RES 模块有90%的 API 是完全一致的，AssetsManager 也继承了这一点，与此同时，AssetsManager 也完全支持 RES 模块的形如 ```default.res.json```的配置文件，以保证尽可能的保证开发者继续使用自己熟悉的工作流并进行逐步的迁移。


在更新 AssetsManager 的同时，我们还为资源管理模块加入了两个非常实用的构建管线插件，分别是：

* 资源配置文件自动生成插件，开发者可以使用这个插件对 ```default.res.json```配置文件进行自动生成
* 纹理集自动合并插件，开发者可以使用这个插件在 ```egret publish```的过程中进行纹理的自动合并

使用 AssetsManager 代替 RES 模块时，会存在以下不兼容问题：

* 不再支持 RES.Analyzer API，改用 RES.Processor API 代替
* 如果尝试获取资源配置文件中不存在的配置，目前会抛出异常，而非返回 null

虽然我们建议开发者使用 AssetManager 模块，但是白鹭引擎目前仍然允许开发者继续使用 RES 模块，只需要开发者在```egretProperties.json```配置文件中，将```assetsmanager```修改为```res```并执行 ``` egret clean``` 即可。


## BUG 修复

* 修复了当发布模式设置为 commonjs 时，如果开发者在 exml 文件的 className 属性上使用了自定义命名空间，会导致发布代码报错的 BUG
* 修复了 exml 文件生成的 exml.e.d.ts 文件中，皮肤文件没有正确的继承 eui.Skin 的问题
* 修改了 egret publish 的默认发布路径，以修复 Egret Wing 进行发布的同时进行纹理合并产生的冲突
* 修复了 eui 布局在特定情况下异常的问题
* 修复了 不规则遮罩绘制位置偏移的问题
* 修复了使用滤镜导致绘制位置偏移的问题

