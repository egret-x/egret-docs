---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/94kgang7/
---
## 概述

白鹭引擎包含了白鹭时代研发的遵循HTML5标准的游戏引擎。他包括 2D / 3D 渲染核心、GUI体系、音频管理、资源管理等游戏引擎的常用模块。

通过使用白鹭引擎，开发者可以尽可能的不用关注浏览器的底层实现，解决HTML5游戏性能问题及碎片化问题，灵活地满足开发者开发2D或3D游戏的需求。

## 更新内容

* 命令行
    * TypeScript编译器升级到 2.4.2 版本
    * 增量编译逻辑优化
    * 修复构建第三方库 DEBUG 和 RELEASE 参数异常问题

* 2D 渲染 - JavaScript
    * 修复特定情况下 cacheAsBitmap 渲染异常问题
    * 修复 BitmapData.create 返回 undefined 问题
    * 修复 eui 发布成 gjs 方式缺少 className 问题

* 2D 渲染 - WebAssembly
    * 增加 dragonBones 模块支持
    * 增加 game 模块支持

## 已知问题

* 开发者如果使用 WebAssembly 渲染，目前会在类的静态变量声明处创建对象时报错