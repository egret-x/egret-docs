---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/exgxsrx6/
---
# 白鹭引擎 5.1.5 发布日志


---

白鹭引擎在 2017年 12 月份正式发布了 5.1 版本。本次版本是 5.1 版本的一次集中性缺陷修复，主要目标是完善微信小游戏、QQ玩一玩、AssetsManager 的稳定性。



## 微信小游戏

* 修复一个个别机型会闪退的 BUG，例如小米MIX2
* 增加 XML 解析功能，经开发者反馈，引擎之前在小游戏不支持 XML 解析功能，本次更新后开发者可以使用 egret.XML.parse 解析 XML 文件了

## QQ 玩一玩

### 更新内容

本周白鹭引擎对玩一玩平台的支持进行了较大的改善，重点修复了以下问题：

* 支持富文本，开发者可以使用 textFlow 属性设置富文本
* 支持字体超链接，开发者可以使用 textFlow 属性设置超链接
* 支持字体描边，开发者可以使用 stroke 属性设置描边
* 支持 MovieClip，开发者可以使用 egret.MovieClip 播放序列帧动画
* 修复 localToGlobal / getBounds 等函数导致的问题
* 优化 Graphics 的性能
* 修复 Socket 相关 BUG
* 修复 HTTP 请求相关 BUG 



## AssetsManager

* 修复 resourceRoot 只能设置一个的 BUG，现在可以每次 loadConfig 指定不同的 resourceRoot

## 2D 渲染 - JavaScript

* 修复 Mesh 不支持纹理旋转问题（感谢 野猪来了 研发团队）
* 修复 BitmapText 可能导致引擎内部报错（感谢开发者 罪舞）
* 修复 eui 虚拟布局可能创建过多对象问题（感谢开发者 IT学思想）
* 修复 egret.ByteArray.readBytes 函数会导致 bytesAvailable 异常问题（感谢开发者 efei731）
* 修复 eui.BitmapLabel 重复设置font因为异步加载会导致字体错乱问题（感谢开发者 lava-hammer）
* 修复设置滤镜的显示对象渲染会出现偏移问题（感谢 猪来了 研发团队）

## 命令行

* 增加 CleanPlugin 插件，开发者可以使用该插件清理指定目录
* 增加 RenamePlugin 插件，开发者可以使用该插件进行文件crc32等版本控制