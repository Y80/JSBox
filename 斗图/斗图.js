/*

*/
$keyboard.barHidden = true;
$ui.loading(true);

var query = '';
var start = 0;
// 每次展示的图片个数。因为 matrix 是 4 列的，所以
var imgCount = 16;

$ui.render({
    props: {
        navBarHidden: 1,
        statusBarStyle: 1
    },
    views: [{
        type: "matrix",
        props: {
            id: "imgs",
            itemHeight: $device.info.screen.width / 4,
            columns: 4,
            spacing: 1,
            template: [{
                type: "image",
                layout: (make) => make.top.bottom.right.left.inset(0)
            }]
        },
        layout: (make) => make.top.bottom.left.right.inset(0),
        events: 
        {
            didSelect: function (sender, indexPath, data) {
                $keyboard.moveCursor(1);
                let t = setInterval(() => {
                    $keyboard.moveCursor(1);
                    if ($keyboard.hasText) {
                        $keyboard.delete()
                    }
                    else{
                        clearInterval(t)
                    }
                }, 10);
                $http.get({
                    url: data.image.src,
                    handler: function(rsp) {
                        $share.wechat(rsp.rawData); // 分享至 微信
                        // $share.qq(rsp.rawData);  // 分享至 QQ
                        // $share.tim(rsp.rawData); // 分享至 TIM
                        // $share.sheet(rsp.rawData);   // 系统分享面板

                        $keyboard.next();
                    }
                });
            },
            didLongPress: () => search(),
            ready: () => {
                // 必须要有此延迟
                $delay(0.01, () => {
                    if($keyboard.hasText){
                        $keyboard.getAllText( (text) => {
                            query = text; 
                            search();
                        })
                    }
                    else{
                        $keyboard.next()
                    }
                });
            }}
    }, {
        type: "spinner",
        props: {
            loading: false
        },
        layout: (make, view) => make.center.equalTo(view.super)
    }]
});
 
function search() {
//    let payload = {
//        query: `${$text.URLEncode(query)}%20${$text.URLEncode("表情")}`,
//        st: 5,
//        start: 0,
//        xml_len: 16,
//        mode: 1,
//        moode: 0,
//        dm: 0
//    }
    
    $http.get({
        url: `https://pic.sogou.com/pics/json.jsp?query=${$text.URLEncode(query)}%20${$text.URLEncode("表情")}&st=5&start=${start}&xml_len=${imgCount}`,
        handler: (resp) => {
            start+=16;
            // $('spinner').loading = false;
            $ui.loading(false);
            let items = resp.data.items;
            let data = [];
            for (let i in items) data.push({ image: { src: items[i].picUrl } });
            $('imgs').data = data;
            
        }
    })
}

