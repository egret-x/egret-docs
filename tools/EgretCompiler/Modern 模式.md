---
title: Modern 模式
createTime: 2024/09/11 17:48:03
permalink: /docs/tools/EgretCompiler/compiler/modern/
---
## 现有项目升级至 Modern 模式[​](#现有项目升级至-modern-模式 "现有项目升级至 Modern 模式的直接链接")

除了 legacy 模式以外，我们还提供了 Modern 模式。如上文所述，这种模式下编译速度更快，但是需要进行较复杂的转换，白鹭引擎在后续版本的创建新项目时默认模板将改为 Modern 模式。

如果您想将现有项目转换为 Modern 模式，请按照如下步骤

### 步骤一：执行转换脚本，生成一个新的 TypeScript 项目[​](#步骤一执行转换脚本生成一个新的-typescript-项目 "步骤一：执行转换脚本，生成一个新的 TypeScript 项目的直接链接")

首先安装转换脚本

```shell
npm  install @egret/convert-egret-project-to-es6 -g

```

安装后，在现有项目中执行如下脚本

```shell
convert-egret convert {your-project}  {output-project}
```

convert-egret 脚本内部会执行如下操作：

1.  根据**{your-project}**项目的 tsconfig.json 文件，获取所有 .ts 和 .d.ts 文件
2.  将 libs 文件夹拷贝至新的路径
3.  遍历每个 ts 文件，为所有的类、全局函数和全局变量添加 export 关键字
4.  再次遍历每个 ts 文件，为所有类添加对应的 import 语句
5.  将这些 ts 文件重新生成至**{output-project}** 中

### 步骤二：执行 TypeScript 编译检查[​](#步骤二执行-typescript-编译检查 "步骤二：执行 TypeScript 编译检查的直接链接")

执行如下脚本

上述脚本的作用是调用 typescript 编译检查（不生成js文件），理论上执行完此代码后，不应该有任何报错，但是由于如下几个原因，可能会导致报错：

1.  白鹭引擎之前的TypeScript编译器是2.4版本，而最新则采用3.9版本，新版本编译器会进行更严格的类型检查
2.  添加完 export / import 后可能有一些语法错误

```shell
cd  {output-path}

tsc --noEmit

```

### 步骤三：将这个新项目中的 TypeScript 代码替换到现有项目中[​](#步骤三将这个新项目中的-typescript-代码替换到现有项目中 "步骤三：将这个新项目中的 TypeScript 代码替换到现有项目中的直接链接")

这一步需要将现有项目的 src 代码全部删除，然后将新项目的代码拷贝进来，强烈建议做好备份

### 步骤四：在现有项目中添加 WebpackBundlePlugin[​](#步骤四在现有项目中添加-webpackbundleplugin "步骤四：在现有项目中添加 WebpackBundlePlugin的直接链接")

您可以使用引擎 5.3.7 创建一个新项目，然后将 scripts/plugins 文件夹拷贝至现有项目同目录，然后在 config.ts 中添加 new WebpackDevServerPlugin() ，代替掉 IncrementCompilePlugin()。 添加该插件后，执行 egret build 命令，WebpackBundlePlugin 会自动进行 webpack构建、启动服务器、打开浏览器相关功能，可以代替 egret run 命令。

### 步骤五：修复因循环依赖而产生的诸多问题[​](#步骤五修复因循环依赖而产生的诸多问题 "步骤五：修复因循环依赖而产生的诸多问题的直接链接")

这一过程比较复杂，构建成功后，打开浏览器控制台，您很大概率会发现项目无法运行并存在一些报错，通过堆栈可以判断其大意是某个类继承了一个 undefined 的类。这种问题是循环依赖导致的，具体原因如下：\\

```js
// index.ts 

import  {  MyComponent  }  from  "./component";

import  {  MyComponent2  }  from  "./component2";

export  class  MyApp  {

  constructor()  {

  const myComponent =  new  MyComponent(this);

  const myComponent2 =  new  MyComponent2();

  }

}

export  class  BaseObject  {

}

// component.ts

import  {  MyApp  }  from  ".";

export  class  MyComponent  {

  constructor(app: MyApp)  {

  }

}

// component2.ts

import  {  BaseObject  }  from  ".";

export  class  MyComponent2  extends  BaseObject  {

  constructor()  {

  super();

  }

}


```

上述代码中，只要在MyApp中引用MyComponent不会报错，但是如果引用了 MyComponent2，就会报错。 这是因为 index.ts 中的 import { MyComponent2} from './MyComponent2' 中执行时，class BaseObject 还没有生成，而MyComponent2 继承了 BaseObject，就会出现这个问题。

上述问题解决后，您就可以使用 modern模式进行项目开发了。

## Modern 模式注意事项[​](#modern-模式注意事项 "Modern 模式注意事项的直接链接")

### 阻止编译剔除[​](#阻止编译剔除 "阻止编译剔除的直接链接")

在 Modern 模式下，如果您的 TypeScript 源代码未被项目引用，是不会被编译至项目中的，为解决此问题，您应手动将所有未直接引用、但是项目中需要的脚本修改为直接引用。

一个典型的例子是，项目中使用了 EUI 自定义组件，该组件会在 EUI 皮肤加载时通过反射的方式获取，但组件自身没有被其他代码所引用，此时就会发生报错提示找不到该自定义组件。

一个简单的解决方案如下所示：

```js

// 修改 Main.ts

import  './components/CustomComponent.ts'


```

编写完上述代码后，再运行项目，就不会出现找不到自定义组件的问题了。

一个常见的错误是如下代码：

```js
import  {  CustomComponent  }  from  './components/CustomComponent.ts'


```

上述代码中，虽然 import 了这个文件，但是如果您的 Main.ts 中**没有使用过** CustomComponent，那么在生成 JavaScript 代码时，这段 import 逻辑会在 **编译期擦除**，进而仍然没有成功 import。