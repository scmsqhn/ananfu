var config = require("../../config.js");
var app = getApp();
Page({
	//openid:  o44Xt0ESHNe6SSyVL9aP6B_noTdY
	data: {
		buyhistory: null,
		userInfo: null,
		userListInfo: [{
				icon: '../../resources/images/iconfont-dingdan.png',
				id: 'dd',
				text: '我的订单',
				isunread: false,
				unreadNum: 2,
                pages: ['view', 'scroll-view', 'swiper'],
				open: false
			}, {
				id: 'djj',
				icon: '../../resources/images/iconfont-card.png',
				text: '我的代金券',
				isunread: false,
				unreadNum: 2,
				open: false,
                pages: ['功能开发中'],
			}, {
				id: 'pt',
				icon: '../../resources/images/iconfont-icontuan.png',
				text: '我的拼团',
				isunread: false,
				unreadNum: 1,
				open: false,
                pages: ['功能开发中'],
			}, {
				id: 'shdz',
				icon: '../../resources/images/iconfont-shouhuodizhi.png',
				text: '收货地址管理',
				open: false,
                pages: ['功能开发中'],
			}, {
				id: 'lxkf',
				icon: '../../resources/images/iconfont-kefu.png',
				text: '联系客服',
				open: false,
                pages: ['微信: scmsqhn'],
			}, {
				id: 'cjwt',
				icon: '../../resources/images/iconfont-help.png',
				text: '常见问题',
				open: false,
				pages: ['1. 如何参与?\r\n    凭微信号直接下单,完成支付即可.','2. 如何收货?\r\n    客服微信会与您联系确认收货地址和订单号.'],
			}
		]
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
		var me = this;
		console.log("[x] 下单历史 history onLoad");
		var userInfo = wx.getStorageSync("userInfo");
		if (userInfo.length == 0) {
			//调用应用实例的方法获取全局数据
			app.getUserInfo(function (userInfo) {
				//更新数据
				me.setData({
					userInfo: userInfo
				})
			})
			userInfo = app.globalData.userInfo
		}
		console.log(userInfo);
		var item = {};
		item["userInfo"] = JSON.parse(userInfo);
		console.log('[x] item["userInfo"]= ', item["userInfo"]);
		me.setData(item);
		var buyhistory = wx.getStorageSync("buyhistory");
		var goodsList = wx.getStorageSync("goodsList");
		console.log(buyhistory);
		this.setData({
			buyhistory: buyhistory
		});
        /**
        修改pages 在下拉菜单,显示单项NAME
        */
        var list = []
        for (var i in buyhistory){
            list[i] = buyhistory[i].NAME
        }
		this.setData({
			"userListInfo[0].pages": list
		});
		console.log("[x] 订单列表数据写入: ", this.data.userListInfo[0].pages)
		var openid = wx.getStorageSync("openid");
		for (var i in buyhistory) {
			for (var j in goodsList) {
				var period1 = buyhistory[i]["PERIOD"]
					var period2 = goodsList[j]["PERIOD"]
					console.log(period1, "==", period2)
					if (period1 == period2) {
						var key = "buyhistory[" + i + "].IMGURL"
							console.log("[*] 通过PERIOD在goodsList中找图 key=", key)
							me.setData({
								key: goodsList[j]["IMGURL2"]
							})
					}
			}
		}
		console.log("onLoad 买家购物历史: ", this.data.buyhistory);
		var animation = wx.createAnimation({
				duration: 400,
				timingFunction: 'ease-out',
			});
		me.animation = animation;
		wx.getSystemInfo({
			success: function (res) {
				me.setData({
					windowWidth: res.windowWidth
				})
				console.log("客户端发起获得下单历史")
			}
		});
		console.log("\n发送申请获得购物历史");
		console.log("买家购物历史: ", this.data.buyhistory);
	},
	onShow: function () {
		var that = this
			this.startNotice();
		console.log("onShow 买家购物历史: ", this.data.buyhistory);
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
