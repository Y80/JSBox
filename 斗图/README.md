[点击安装 斗图.js](https://raw.githubusercontent.com/CodedArtist/JSBox/master/%E6%96%97%E5%9B%BE/%E6%96%97%E5%9B%BE.js)

# 脚本功能
获取当前输入框中的文字，在线获取相关的表情包，点击其中一张图片即可直接发送到 微信|QQ|TIM；  
长按任意一张图可以获取下一页数据。  

<p align='center'><img src='http://ww4.sinaimg.cn/large/006tNc79ly1g3if53r71xj30v90t7jt5.jpg' width='300' /><br/>请先在 JSBox 中进行此设置<br/></p>
<p align='center'><img src='http://ww4.sinaimg.cn/large/006tNc79ly1g3if31afy9j30u01szak3.jpg' width='300' /><br/>演示截图<br/></p>
<p align='center'><img src='http://ww4.sinaimg.cn/large/006tNc79ly1g3i6l70fvij30u01sztkc.jpg' width='300' /><br/>演示截图<br/></p>

# 注意事项
- 获取多页数据，会（因内存占用过多而？）重载脚本（有时第一页就会）
- 减小脚本中的 `imgCount` 值可以尽可能的避免脚本重载发生（代码第 3 行）
- 改变分享的目的地请查看代码第 44 行
- 如果输入框中没有文字，那么会自动切换至下一个键盘
- 分享成功后会清空输入框的文本，并切换至下一个键盘
- 基于上面两点，建议将常用的输入法放在 JSBox 输入法的下一项，比如：

<p align='center'><img src='http://ww3.sinaimg.cn/large/006tNc79ly1g3iflzuzhkj30tz0v7gnw.jpg' width='300' /><br/>键盘排序1<br/></p>
<p align='center'><img src='http://ww1.sinaimg.cn/large/006tNc79ly1g3if6rypglj30u00u076d.jpg' width='300' /><br/>键盘排序2<br/></p>

