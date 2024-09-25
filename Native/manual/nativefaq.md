---
title: nativefaq
createTime: 2024/09/16 17:56:37
permalink: /docs/Native/manual/nativefaq/
---


#### 为什么遮罩没有效果了
* 答：在原生项目里，修改 mask 的值后（如 x,y,width,height），一定要对 displayObject 重新赋值 mask，不然会出问题。
