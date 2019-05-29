# 脚本功能
获取当前输入框中的文字，在线获取相关的表情包，点击其中一张图片即可直接发送到 微信|QQ|TIM；长按任意一张图可以获取下一页数据；点击任意一张图即可分享，并清空输入框文字、切换至下一个键盘。  
演示截图：![演示截图](http://ww4.sinaimg.cn/large/006tNc79ly1g3i6l70fvij30u01sztkc.jpg)

# 注意事项
- 如果输入框中没有文字，那么会自动切换至下一个键盘
- 请确保输入框中没有 emoji，否则获取不到任何数据
- 获取多页数据（有时第一页就会），会因内存占用过多而重载脚本
- 有时获取第一页图片就会出现重载脚本的现象
- 减小脚本中的 `imgCount` 值可以尽可能的避免脚本重载发生


**建议将常用的输入法放在 JSBox 输入法的下一项，比如：**
![](http://ww3.sinaimg.cn/large/006tNc79ly1g3i6itthscj30u01szju5.jpg)
或者
![](http://ww1.sinaimg.cn/large/006tNc79ly1g3i6jbil5oj30u01szact.jpg)
