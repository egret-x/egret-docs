---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/potydvot/
---
# 白鹭引擎 5.2.30 发布日志
白鹭引擎在 2019年10月28日，发布 5.2.30 稳定版本。

苹果的 iOS 系统更新到 13.1 后，内置的 Safari 浏览器新增了一个功能："请求桌面网站"，尤其是 iPad ，默认就会使用该模式。在这种浏览模式下，移动设备的 **userAgent** 和 mac 台式机一摸一样，导致引擎将移动设备识别为台式机，相关返回值发生错误。本次更新就是为了解决这个问题。

- **[优化]** 修复 iOS 13.1 系统下，移动设备的 Safari 浏览器设置为"请求桌面网站"时，egret.Capabilities.os 返回值是 "Mac OS" 的问题
- **[优化]** 修复 iOS 13.1 系统下，移动设备的 Safari 浏览器设置为"请求桌面网站"时，egret.Capabilities.isMobile 返回值是 false 的问题。
