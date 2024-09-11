---
title: Event类
createTime: 2024/09/11 09:50:34
permalink: /docs/event/
---
Event类是所有事件类的基类。当创建一个自定义事件的时候，事件应该继承自Event类。同时Event类也包含一些事件。这些事件通常与显示列表，显示对象的状态有关。

在使用Event类时，有以下几个属性与方法需要注意。

* 首先是构造函数中的三个参数，`type`、`bubbles`和`cancelable`。

   * `type`指定事件的类型，在“约会”的例子中，`type`事件类型为“DATE”。我们经常使用的事件类型有“ADDED”、“COMPLETE”等。

   * `bubbles`是指定事件是否参与事件流的冒泡阶段，关于事件流，会在后面的小节中介绍。

   * `cancelable`表示是否可以取消与事件关联的默认动作。

* 另外还需要关注的属性是`target`，这个属性表示事件的目标，也就是事件的发送者。其他的一些方法都与事件流有关，后面的内容会进行详细介绍。

### 自定义事件

通常情况下，游戏中都会编写一些自定义事件，在上一小节中，已经编写过一个“约会”的自定义事件了，下面是详细代码。

```javascript
class DateEvent extends egret.Event
{
    public static DATE:string = "约会";
    public _year:number = 0;
    public _month:number = 0;
    public _date:number = 0;
    public _where:string = "";
    public _todo:string = "";
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }
}
```

上述自定义事件类`DateEvent`继承自 `egret.Event` 类。同时定义一个名称为 `DATE` 的属性，该属性为静态属性，类型为字符串。

上述自定义事件定义了一些事件中所需要的数据，这些数据包括日期，地点，做什么。在自定义事件类的时候，开发者可以根据自己的需要来定义事件类型和事件数据。
