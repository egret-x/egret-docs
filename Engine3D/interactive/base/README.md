---
title: 3D 碰撞
createTime: 2024/09/11 09:50:34
permalink: /docs/base/
---

## 概念与原理

碰撞指2个物体有相交、包含等关系。比如点与物体即包含关系，线与面即相交关系。

在 3d 中，有下面几种碰撞类型：

* 点碰撞 egret3d.Vector3D，检测点是否在一个模型内。

* 射线碰撞 egret3d.Ray，检测射线是否与一个模型相交。

* 模型碰撞  egret3d.Bound，检测模式与模型是否相交。


