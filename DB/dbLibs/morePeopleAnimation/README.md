---
title: 多人物动画
createTime: 2024/09/11 10:50:04
permalink: /docs/db/dbLibs/morePeopleAnimation/
---
DragonBones 系统中允许创建多个骨骼动画，用户可以创建多个 Factory 来管理不同的骨骼动画，也可使用同一个 Factory 来管理多个骨骼动画。
* 当使用一个 Factory 时，需要注意避免龙骨数据或骨架数据重名。
* 如果没有特殊需求，建议不要使用多个 Factory 实例

使用多个EgretFactory方法可参考**创建骨骼动画**一节。
范例如下：

~~~javascript
const dragonbonesData = RES.getRes('RobotGame_1_json')
const textureData = RES.getRes('texture_json')
const texture = RES.getRes('texture_png')

//
const egretFactoryA = new dragonBones.EgretFactory()
egretFactoryA.parseDragonBonesData(dragonbonesData)
egretFactoryA.parseTextureAtlasData(textureData, texture)

const armatureDisplayA = egretFactoryA.buildArmatureDisplay('robot')
this.addChild(armatureDisplayA)
armatureDisplayA.x = 200
armatureDisplayA.y = 300
armatureDisplayA.scaleX = 0.5
armatureDisplayA.scaleY = 0.5

//
const egretFactoryB = new dragonBones.EgretFactory()
egretFactoryB.parseDragonBonesData(dragonbonesData)
egretFactoryB.parseTextureAtlasData(textureData, texture)

const armatureDisplayB = egretFactoryB.buildArmatureDisplay('robot')
this.addChild(armatureDisplayB)
armatureDisplayB.x = 250
armatureDisplayB.y = 350
armatureDisplayB.scaleX = 0.5
armatureDisplayB.scaleY = 0.5
~~~

效果如图：

![](56c314eb7853f.png)

使用同一 Factory 方法如下：

~~~javascript
const dragonbonesDataA = RES.getRes('RobotGame_1_json')
const textureDataA = RES.getRes('texture_json')
const textureA = RES.getRes('texture_png')

const dragonbonesDataB = RES.getRes('Dragon_json')
const textureDataB = RES.getRes('dragontexture_json')
const textureB = RES.getRes('dragontexture_png')

const egretFactory = dragonBones.EgretFactory.factory
egretFactory.parseDragonBonesData(dragonbonesDataA)
egretFactory.parseTextureAtlasData(textureDataA, textureA)
egretFactory.parseDragonBonesData(dragonbonesDataB)
egretFactory.parseTextureAtlasData(textureDataB, textureB)

const armatureDisplayA = dragonbonesFactory.buildArmatureDisplay('robot')
this.addChild(armatureDisplayA)
armatureDisplayA.x = 200
armatureDisplayA.y = 300
armatureDisplayA.scaleX = 0.5
armatureDisplayA.scaleY = 0.5

const armatureDisplayB = dragonbonesFactory.buildArmatureDisplay('Dragon')
this.addChild(armatureDisplayB)
armatureDisplayB.x = 250
armatureDisplayB.y = 350
armatureDisplayB.scaleX = 0.5
armatureDisplayB.scaleY = 0.5
~~~

效果如图：

![](56c314eba5994.png)
