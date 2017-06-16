var config = require("../../config.js");
var app = getApp();
Page({
	//openid:  o44Xt0ESHNe6SSyVL9aP6B_noTdY
	data: {
	},
	onReady: function () {
		console.log("onReady")
	},
	onShow: function () {
		console.log("onShow")
	},
	onHide: function () {
		console.log("onHide")
	},
	onReachBottom: function () {
		console.log("onReachBottom")
	},
	onReachTop: function () {
		console.log("onReachTop")
	},
	onUnload: function () {
		console.log("onUnload")
	},
	onLoad: function () {
	},
	onShow: function () {
	},
	startNotice: function () {
		console.log("startNotice")
	},
	onToTop: function (e) {
		if (e.detail.scrollTop >= 290) {
			this.setData({
				sortPanelPos: 'fixed'
			});
		} else {
			this.setData({
				sortPanelPos: 'relative'
			});
		}
		//console.log(e.detail.scrollTop)
	},
	onClick: function (e) {
		console.log("e.currentTarget.dataset.index= ", e.currentTarget.dataset)
		console.log("e.currentTarget.dataset.index= ", e.currentTarget)
		console.log("e.currentTarget.dataset.index= ", e)
		console.log("e.Target.dataset.index= ", e.Target)
		console.log("e.currentTarget.dataset.index= ", e.currentTarget.dataset.index)
		console.log(this.data["buyhistory"])
		console.log(this.data["buyhistory"][0])
		console.log(this.data["buyhistory"][1])
		console.log(this.data["buyhistory"][2])
		var index = e.currentTarget.dataset.index //获得页面index
			//  console.log("index=" + index)
			//  console.log("../item/item?index=" + index)
			//	wx.navigateTo({
			//	url: "../item/item?index=" + index
			//	});
	},
	gototest() {
		console.log('修改收货地址')
		wx.navigateTo({
			url: "../test/test"
		});
	},
	onClickItem(e) {
		//158 212 374 420 4
		console.log('[x] 点击单项', e.currentTarget.offsetTop)
		var step = (e.currentTarget.offsetTop - 158) / 54
		console.log("[x] 第%d项", step)

	},
	widgetsToggle: function (e) {
		var id = e.currentTarget.id,
		list = this.data.userListInfo;
        console.log("[x] 选中id 为: ", id)
		for (var i = 0, len = list.length; i < len; ++i) {
			if (list[i].id == id) {
				list[i].open = !list[i].open;
                if (list[i].open==true){
                  console.log("[x] 打开第%d个ITEM", i)
                }else{
                  console.log("[x] 关闭第%d个ITEM", i)
                }
			} else {
				list[i].open = false;
			}
		}
		this.setData({
			userListInfo: list
		});
        console.log(list)
	}

})

/**
Page( {
data: {
userInfo: {},
projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
userListInfo: [ {
icon: '../../images/iconfont-dingdan.png',
text: '我的订单',
isunread: true,
unreadNum: 2
}, {
icon: '../../images/iconfont-card.png',
text: '我的代金券',
isunread: false,
unreadNum: 2
}, {
icon: '../../images/iconfont-icontuan.png',
text: '我的拼团',
isunread: true,
unreadNum: 1
}, {
icon: '../../images/iconfont-shouhuodizhi.png',
text: '收货地址管理'
}, {
icon: '../../images/iconfont-kefu.png',
text: '联系客服'
}, {
icon: '../../images/iconfont-help.png',
text: '常见问题'
}]
},

onLoad: function() {
var that = this
//调用应用实例的方法获取全局数据
app.getUserInfo( function( userInfo ) {
//更新数据
that.setData( {
userInfo: userInfo
})
})
}
})
*/
