var config = require("../../config.js")
var app = getApp()
	Page({
		data: {
            goodsList: app.getData()["goodsList"],
            imgUrls: app.getData()["imgUrls"],
            notices: app.getData()["notices"],
   			animationNotice: app.getData()["animationNotice"],
            timepre: app.getData()["timepre"],
			openid: app.getData()["openid"],
			isLogin: app.getData()["isLogin"],
			buyhistory: app.getData()["buyhistory"],
			userInfo: app.getData()["userInfo"],
			orderList: app.getData()["orderList"],
            autoplay:true,
            indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 1000,
			windowWidth: 320,
			sortPanelTop: '290',
			sortPanelDist: '0',
			sortPanelPos: 'relative',
			noticeIdx: 0,


//            goodsList: app.getData()["goodsList"],
        },
   		refresh: function () {
            this.setData({
                goodsList: app.getData()["goodsList"]
            })
            console.log("\n开始刷新HOME列表 goodsList:", this.data.goodsList)
		},onPullDownRefreash(){
            console.log("onPullDownRefreash")
          //  this.refresh()
        },onShow(){
            console.log("onShow")
        },onHide(){
            console.log("onHide")
        },onReachBottom(){
            console.log("onReachBottom")
        },onReachTop(){
            console.log("onReachTop")
        },onUnload(){
            console.log("onUnload")
        },onReady: function () {
            console.log("onReady")
        },onLoad: function () {
			var me = this;
			var animation = wx.createAnimation({
					duration: 1000,
					timingFunction: 'ease-out',
				});
			me.animation = animation;
			wx.getSystemInfo({
				success: function (res) {
					me.setData({
						windowWidth: res.windowWidth
					})
				}
			});
//            app.getUserInfo(console.log)
            console.log('onLoad refresh')
            this.refresh()
            console.log('home: 同步以后goodsList数据= ', this.data.goodsList)

//            this.syncDataFromServer()
        },
        syncDataFromServer: function(){
   			wx.request({
				url: config.service.sync,
				data: {
					code: 1001, //sync the personal msg with database
//                    item: '{"period": {"$gt":100000}}'
                    item: '{ "period": { "$gt": 100000 } } '
				},
				header: {
					'Content-Type': 'application/json'
				},
				success: function (res) {
                    console.log("request "+config.service.sync+"SUCC")
					console.log(res.data)
                    //app.setCusMsg(res.data) //set the local custom msg
				}
			})
			//console.log('onLoad');
		},
		startNotice: function () {
			var me = this;
			var notices = me.data.notices || [];
			if (notices.length == 0) {
				return;
			}
			var animation = me.animation;
			//animation.translateY( -12 ).opacity( 0 ).step();
			animation.translateY(0).opacity(1).step({
				duration: 0
			});
			me.setData({
				animationNotice: animation.export()
			});
			var noticeIdx = me.data.noticeIdx + 1;
			if (noticeIdx == notices.length) {
				noticeIdx = 0;
			}
			// 更换数据
			setTimeout(function () {
				me.setData({
					noticeIdx: noticeIdx
				});
			}, 400);
			// 启动下一次动画
			setTimeout(function () {
				me.startNotice();
			}, 5000);
		},
		onShow: function () {
			this.startNotice();
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
            console.log("scrollView to onToTop")
            this.refresh()
			//console.log(e.detail.scrollTop)
		},topViewTouch: function(){
            console.log("topViewTouch")
            this.refresh()
        },
		onClick: function (e) {
            console.log(e.currentTarget.dataset.index)
            console.log(e.currentTarget.dataset)
			var index = e.currentTarget.dataset.index //获得页面index
				//console.log("index=" + index)
				console.log("../item/item?index=" + index)
				wx.navigateTo({
					url: "../item/item?index=" + index
				});
		},
		toFaq: function (e) {
			wx.navigateTo({
				url: "../faq/faq"
			});
			//console.log("toFaq")
		},
		onAdd2List: function (e) {
			var index = e.currentTarget.dataset.index //获得页面index
            console.log("onAdd2List.index="+index)
            app.addOrderList(index)
  			wx.showToast({
				title: '正在添加...',
				icon: 'loading',
				duration: 700
			});

		}
	})
