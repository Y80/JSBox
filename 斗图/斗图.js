// https://github.com/CodedArtist/JSBox/tree/master/斗图

const imgCount = 16;  // 可选值 4、8、12、16

if($app.env!=$env.keyboard){
  $ui.alert("本脚本只能运行在键盘扩展中");
  $app.close();
}

$keyboard.barHidden = true;

var query = '';
var start = 0;

$ui.render({
  props: {
    navBarHidden: 1,
    statusBarStyle: 1
  },
  views: [{
    type: "matrix",
    props: {
      id: "imgs",
      square: true,
      columns: 4,
      spacing: 1,
      template: [{
        type: "image",
        layout: (make) => make.top.bottom.right.left.inset(0)
      }]
    },
    layout: (make) => make.top.bottom.left.right.inset(0),
    events: {
      didSelect: (sender, indexPath, data) => {
        let t = setInterval(() => {
          $keyboard.moveCursor(1);
          if ($keyboard.hasText) $keyboard.delete()
          else clearInterval(t)
        }, 10);
        $device.taptic(0);
        $('spinner').loading = true;
        $http.get(data.image.src,)
          .then(rsp => {
            // 选择其中一个，注释另外两个。
            $share.wechat(rsp.rawData); // 分享至 微信
            // $share.qq(rsp.rawData);  // 分享至 QQ
            // $share.tim(rsp.rawData); // 分享至 TIM
            
            $keyboard.next();
          });
      },
      didLongPress: () => {
        $device.taptic(0);
        $('spinner').loading = true;
        search();
      },
      ready: () => {
        // 必须要有此延迟
        $delay(0.1, () => {
          if($keyboard.hasText){
            $keyboard.getAllText( (text) => {
              query = text + '表情'; 
              search();
            })
          }
          else{
            $keyboard.next()
          }
        });
      }
    }
  }, {
    type: "spinner",
    props: {
      loading: true
    },
    layout: (make, view) => make.center.equalTo(view.super)
    }]
});
 
function search() {
  $http.get(`https://pic.sogou.com/pics/json.jsp?query=${$text.URLEncode(query)}&st=5&start=${start}&xml_len=${imgCount}`)
    .then(rsp => {
      start+=imgCount;
      $('spinner').loading = false;
      let items = rsp.data.items;
      let data = [];
      for (let i in items) data.push({ image: { src: items[i].picUrl } });
      $('imgs').data = data;
    })
}
