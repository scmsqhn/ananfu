var config = require("../../config.js")
var app = getApp()
	Page({
		data: app.getData(),
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
            this.refresh()
        },onLoad: function () {
			var me = this;
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
				}
			});
            app.getUserInfo(console.log)
            this.refresh()
            console.log(this.data["goodsList"][0])
            console.log("this.syncDataFromServer()")
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
            this.refresh()
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
