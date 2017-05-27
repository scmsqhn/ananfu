var config = require("../../config.js")
var app = getApp()
Page({
		//openid:  o44Xt0ESHNe6SSyVL9aP6B_noTdY
		data: {
            "buyhistory": app.getHistoryData(),
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
		onLoad: function ( ) {
			console.log("下单历史 history onLoad")
			var me = this;
            this.setData({
                "buyhistory": app.getHistoryData()
            })
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
			//console.log('shoppingList.onLoad');
			console.log("买家购物历史: ", this.data.buyhistory);
		},
		onShow: function ( ) {
			var that = this
			this.startNotice( );
			console.log("onShow 买家购物历史: ", this.data.buyhistory);
		},
        startNotice: function( ){
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
        gototest(){
            console.log('修改收货地址')
            wx.navigateTo({url: "../test/test"});
        },
	})
