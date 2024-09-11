---
title: 原生项目常见问题
createTime: 2024/09/11 10:50:04
permalink: /docs/53vkf93x/
---

#### 为什么遮罩没有效果了
* 答：在原生项目里，修改 mask 的值后（如 x,y,width,height），一定要对 displayObject 重新赋值 mask，不然会出问题。
