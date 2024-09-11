---
title: 发布到 AppStore
createTime: 2024/09/11 09:50:34
permalink: /docs/1rzvprpp/
---


2019年苹果更新了对HTML5游戏的政策，要求HTML5游戏应在 Safari浏览器中展现，而不是直接打包为 ipa 发布到 AppStore 中，对此，很多
开发者给予关注，并跟我们咨询寻求帮助，解决他们在白鹭引擎开发的HTML5游戏发布到AppStore的问题。

在我们白鹭完整的开发工作流产品中，使用Egret Native就可以解决就可以解决这个问题。

在最近几个月的时间中，我们引擎团队帮助数十家开发商成功将其产品顺利通过 AppStore 新规审核，总结了一些实操经验，今天跟大家分享下，
希望可以帮助更多的开发者朋友过审AppStore。


## 一定不要使用 WKWebView 直接打包

这是苹果现在重点打击的目标，请开发者一定要采用 Egret Native 提供的打包方式进行打包，而不是使用 WKWebView。具体原因是，WKWebView发布的游戏是一个运行在HTML5环境下的游戏，不符合最新的开发者规范中的4.7项。而 Egret Native 与WKWebView不同，底层运行的是一套纯原生的、并且针对白鹭引擎进行了大量定制性能优化的渲染引擎，完全符合苹果的开发者规范。

此外，我们强烈建议您开启 EgretNative的NativeRenderer 模式，采用这种模式不仅可以大幅提升您的游戏性能，而且经过实际验证，可以进一步提升AppStore的过审概率。

## 游戏代码应打包至本地而非远程下载

苹果针对应用的热更新现在提出了更严格的要求，您如果收到了苹果的拒绝邮件，并且其中明确您违反了 Guideline 2.5.2 - Performance 这一项中的 During review, your app contains the ability to download code, which is not permitted on the App Store 这一部分内容，您需要修改现有项目结构，将游戏代码应打包至本地而非远程下载，具体一个简单的验证手段如下：

1. 将您的测试机关掉WiFi/4G ，保持其处于无网络环境
2. 启动您的游戏
3. 确保在无网络环境下，您的游戏可以顺利运行，直到游戏逻辑必须需要连接网络（比如登录游戏服务器），至少渲染出一个登录界面，并且该界面是使用白鹭引擎渲染的而非自行添加的 iOS Native控件
4. 游戏前30分钟的资源全部在IPA中加载，而非网络加载，网络消息只是用来进行必要的客户端服务器交互

## 原生代码中请不要包含任何 WKWebView

不仅游戏本身不要使用 WKWebView，我们建议您最好不要在 iOS 原生代码中包含任何的 WKWebView，因为理论上如果您包含 WKWebView，您就具备了在苹果审核后通过更换链接的方式在苹果未审核的情况下在App中添加其他功能的能力，这就违反了苹果开发者规范中的 Guideline 2.3.1 - Performance, We discovered that your app contains hidden features.这一部分。

针对此问题，我们建议您可以从苹果的角度去思考，这款App从技术实现角度来看，是否具备了绕过苹果审核添加新功能的能力。举个例子，理论上您的代码里只要包含一个 WKWebView，并且这个WKWebView可以被游戏随时唤醒，理论上就具备了在苹果过审后将苹果支付修改为弹出 WebView并在其中添加微信/支付宝网页支付的能力。如果您的 App 在技术角度来看具备这样的潜力（哪怕您无意这样做），就一定不会过审。


## 确保您的代码中不包含第三方支付代码

这点问题与上一条类似，请确保您的代码（特别是遗留代码，以及接入的第三方SDK代码）中不包含第三方支付代码，否则您就违反了苹果开发者规范中的 Guideline 3.1.1 - Business - Payments - In-App Purchase  We noticed that your app or its metadata enables the purchase of content, services, or functionality in the app by means other than the in-app purchase API, which is not appropriate for the App Store 这一部分。

在我们进行技术支持的客户中，多次出现过开发商接入了聚合支付SDK（一般是自己公司的其他部门编写的）中包含了微信支付/支付宝支付的代码，虽然这些代码并不会真正运行，但是仍然因为该原因被苹果拒绝过深。


## 总结

从上文可以看出，苹果希望开发者做的是：

* 为 AppStore 提交优质的内容
* 确保采用苹果支付

苹果禁止开发者做的是：

* 为苹果提供劣质内容
* 为苹果提供虚假内容并后续通过热更新来进行替换（马甲包）
* 任何有可能导致用户使用第三方支付代替苹果支付的行为


> 注：这些原则只是白鹭引擎团队根据我们协助开发者成功过审的经验而得出的原则，并非代表苹果官方观点。


开发者应随时审视自己的应用是否符合上述原则。如果您仍然存在问题，可以与白鹭引擎的技术支持团队联系，我们可以为您提供的苹果过审技术顾问。




## 后续展望


我们今天（2020年3月3日）还发布了 Egret Native 1.0.1 版本，修复了多处原生渲染相关的BUG，特别是一个关于 iOS 13.4（苹果开发者预览版本）上由于苹果的API调整导致EgretNative黑屏的问题，建议所有开发者更新至此版本以防止 iOS 13.4 正式发布后现有游戏出现此问题。

除此之外，我们进一步提升了 EgretNative 的启动速度，目前一个HelloWorld的启动时间大约提升了10%左右。我们后续也会继续针对 NativeRenderer 的性能和稳定性进行更多的优化。

我们在2020年1月份收到了苹果的邮件，苹果指出目前 Egret Native 底层采用的 OpenGL 在未来有可能被废弃，推荐我们采用苹果的新技术 Metal 作为其替代品。白鹭团队正在探索将底层从 OpenGL 切换为 Metal 的可行性，我们目前倾向于基于一些业界相对成熟的开源项目进行一些改造，目前已经有了初步方案，我们将在苹果苹果正式废弃 OpenGL 时做好充分的准备工作，如果有开发者收到类似邮件请无需紧张。
