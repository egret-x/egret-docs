---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/86g2gd8t/
---
# 白鹭引擎 5.2.0 发布日志


---


白鹭引擎在 2017年 12 月份正式发布了 5.1 版本测试版。在 2018年5月25日，我们将发布 5.2 稳定版本。本次版本不会引入新特性，只针对一些BUG进行修复



## 2D 渲染 - JavaScript 

* 修复 Texture.getPixels 在 WebGL 环境下有些浏览器不兼容问题（感谢开发者 汪喻祥）

## AssetsManager

* 修复 getResByUrl 的资源无法通过 destroyRes 释放问题（感谢开发者 龙彬）

## 命令行

* 修复 commonjs2 发布模式一些不兼容问题（感谢开发者 郑晓俊）

## 微信小游戏支持库

微信小游戏支持库请通过 Egret Launcher 将您的项目发布一次微信小游戏的方式进行更新，版本号 1.0.17

* 修复使用 HttpRequest 请求二进制异常问题（感谢开发者 昌哥）
* 修复某些情况下重写 window.isNaN 造成报错问题

【发布日期：2018年5月25日】