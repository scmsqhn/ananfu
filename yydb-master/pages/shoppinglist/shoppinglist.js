var config = require("../../config.js")
	var app = getApp()
	Page({
		data: {
			myarray: ['1元','2元','3元','4元','5元','6元','7元','8元','9元','10元','11元','12元','13元','14元','15元','16元','17元','18元','19元','20元'],
			pickerindex: 0,
			orderList: app.getData()["orderList"],
            point: 1
		},
		refresh: function () {
			console.log("refresh doing")
			var that = this
				this.getList(that)
				this.onLoad()
		},
		getList: function (that) {
			//            that.data.orderList= app.getData()["orderList"]
			that.setData({
				orderList: app.getData()["orderList"]
			})
		},
		onReady: function () {
            
        },
        setarray: function(){
			var me = this;
            for(var i=1;i<100;i++){
                me.data.array[i]=(i+1)
            }
        },
        setMore: function(e, tempset){
			app.setMore(e, tempset)
            this.refresh()
        },
		onLoad: function () {
			//console.log(app.getData()['orderList']);
			var me = this;
//            me.setarray()
			me.data.orderList = app.getData()["orderList"]
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
					me.setData({
                        orderList: app.getStorage("orderList")
//						orderList: app.getData()["orderList"]
					})
				}
			});
			//console.log('shoppingList.onLoad');
			//console.log(this.data.orderList);
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
			var that = this
				this.getList(that)
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
			//console.log(e.detail.scrollTop)
		},
		onClick: function (e) {
			console.log("e.currentTarget.dataset.index=", e.currentTarget.dataset.index)
			var index = e.currentTarget.dataset.index //获得页面index
			console.log("index=" + index)
			console.log("../item/item?index=" + index)
            wx.navigateTo({
					url: "../item/item?index=" + index
				});
		},
		setPay: function (e) {
		},
		toFaq: function (e) {
			wx.navigateTo({
				url: "../faq/faq"
			});
			//console.log("toFaq")
		},
		onDel2List: function (e) {
			var index = e.currentTarget.dataset.index //获得页面index
				//console.log("onDel2List")
				//console.log(this.data.orderList)
				app.delOrderList(index)
                this.refresh()
       			wx.showToast({
    				title: '正在移出...',
	    			icon: 'loading',
		    		duration: 700
		    	});
				//console.log(this.data.orderList)
		},
		makeOrder: function () {
			//获得清单内的货物,进行下单
			var order = app.getOrderData()
				//console.log(order)
				return order
		},
		payit: function (e) {
			//var order = this.makeOrder()
			//console.log("start payit\r\n")
			var that = this;
			wx.login({
				success: function (res) {
					//console.log('for pay purpose ,login success\r\n')
					//console.log(that.data.orderList)
					that.getOpenId(res.code, that.data.orderList);
				}
			});
		},
		//获取openid
		getOpenId: function (code, order) {
			//console.log("getOpenId")
			//console.log(code)
			//console.log(order)
			wx.request({
				//用 code 换取 openid 和 session_key
				url: config.service.orderList,
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					'code': code,
					'order': order
				},
				success: function (res) {
					//console.log("return is\r\n")
					//console.log("statusCode="+res.statusCode)
					//console.log(res.data)
					//console.log('get opendId succ/r/n')
					var openId = res.data.openid;
					//console.log('make the order with th opendId we got right now/r/n')
					//					that.xiadan(openId);
					//console.log("the open id is "+openId)
				}
			})
		}

		//下单
	,
		xiadan: function (openId) {
			//console.log("goto xiadan with openId")
			var that = this;
			wx.request({
				url: config.service.wxPayUrl,
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					'openid': openId
				},
				success: function (res) {
					//console.log('xiadan succ')
					var prepay_id = res.data.prepay_id;
					//console.log("统一下单返回 prepay_id:" + prepay_id);
					that.sign(prepay_id);
				}
			})
		},
		//签名
		sign: function (prepay_id) {
			//console.log("the prepay_id id is "+prepay_id)
			//console.log("signature the prepay_id")
			var that = this;
			wx.request({
				url: 'https://70139330.qcloud.la/weixinpay/sign',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					'repay_id': prepay_id
				},
				success: function (res) {
					//console.log("send the signatureed the prepay_id, get the reply msg")
					that.requestPayment(res.data);
				}
			})
		},
		//申请支付
		requestPayment: function (obj) {
			wx.requestPayment({
				'timeStamp': obj.timeStamp,
				'nonceStr': obj.nonceStr,
				'package': obj.package,
				'signType': obj.signType,
				'paySign': obj.paySign,
				'success': function (res) {
					console.log(res)
				},
				'fail': function (res) {
					console.log(res)
				}
			})
		},
		bindPickerChange: function (e) {
            var index = e.currentTarget.dataset.index //获得页面index
            console.log(e.currentTarget.dataset)
            console.log(e.currentTarget)
            console.log(e)
            var set = e.detail.value
			console.log('picker发送选择改变，携带值为', index, e.detail.value)
            this.setMore(index, set)
		},
	})
