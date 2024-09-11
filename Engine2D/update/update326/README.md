---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/965h4s1a/
---
## 更新内容

### 概述

Egret Engine 3.0 包含了白鹭时代研发的遵循HTML5标准的2D引擎及全新打造的[3D引擎](https://github.com/egret-labs/egret-3d)，它解决了HTML5性能问题及碎片化问题，灵活地满足开发者开发2D或3D游戏的需求，并有着极强的跨平台运行能力。

## 更新内容

本次更新内容汇总了从引擎 3.2.5 到 3.2.6 的改动。

* 命令行 TypeScript 版本升级到 2.1.4
* eui.Label.style 增加设置多个功能
* 修复 MovieClip 移出舞台后循环次数错乱问题
* 修复输入文本会阻止 TOUCH_BEGIN 事件问题
* 修复设置 audioType 不生效问题
* 修复声音循环播放音量失效问题
* 修复 exml 数据绑定设置负数异常问题
* 修复某些浏览器下设置滤镜后不显示问题

#### 路线图

* 优化滤镜性能

升级 TSC 2.1 可能导致开发者的用户代码出现编译报错，具体请参见：[http://bbs.egret.com/thread-24881-1-1.html](http://bbs.egret.com/thread-24881-1-1.html)
