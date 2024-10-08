---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/gd3r6r9v/
---
## 更新内容

### 概述

Egret Engine 3.0 包含了白鹭时代研发的遵循HTML5标准的2D引擎及全新打造的[3D引擎](https://github.com/egret-labs/egret-3d)，它解决了HTML5性能问题及碎片化问题，灵活地满足开发者开发2D或3D游戏的需求，并有着极强的跨平台运行能力。


本次更新内容汇总了从引擎 3.2.2 到 3.2.3 的改动。

* native 支持多种自定义字体
* 修复 MovieClip 设置帧频异常问题
* 修复 eui.EditableText.prompt 异常问题
* 修复 native 中不能解析 xml 换行符问题
* 修复 tween 在卡顿情况下异常问题
* 修复 webgl 下 BlendMode.ADD 异常问题

## DragonBones更新内容

* 新增插槽可以在动画中改变层级
* 优化曲线补间的性能
* 修复通过 replaceSlotDisplay 换装可能影响原始贴图数据问题
* 修复动画融合时动画只有一帧，可能会融合不完整问题
* 逐步废弃可动态添加骨骼和插槽的 api

#### 路线图

* 优化滤镜性能
