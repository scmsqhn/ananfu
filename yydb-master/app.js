//app.js
App({
	onLaunch: function () {
		//调用API从本地缓存中获取数据
		var logs = wx.getStorageSync('logs') || []
			logs.unshift(Date.now())
			wx.setStorageSync('logs', logs)
	},
    showOrderList: function(note){
        var orderList= this.globalData["orderList"]
        //console.log("orderList=")
        //console.log(orderList)
        console.log(this.globalData["orderList"])
        for (var i=0; i<orderList.length; i++){
            //console.log(orderList[i])
        }
    },
	getUserInfo: function (cb) {
		var that = this;
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			//调用登录接口
			wx.login({
				success: function () {
					wx.getUserInfo({
						success: function (res) {
							that.globalData.userInfo = res.userInfo;
							typeof cb == "function" && cb(that.globalData.userInfo)
						}
					})
				}
			});
		}
	},
	getImgUrls: function (index) {
		var gData = this.globalData
			//console.log("gData=" + gData)
			var imgDatas = gData["goodsList"]
			//console.log("[index]=" + index)
			//console.log("imgDatas[index]=" + imgDatas[index])
			//console.log("imgDatas[index].goods=" + imgDatas[index].goods)
			//console.log("imgDatas[index].goods.imgUrl=" + imgDatas[index].goods.imgUrl)
			var imgUrls = {
			img1: (imgDatas[index].goods.imgUrl),
			img2: (imgDatas[index].goods.imgUrl2),
			img3: (imgDatas[index].goods.imgUrl3)
		}
		return imgUrls
	},
	globalData: {
		userInfo: null,
		orderList: [],
		payList: [{
				"period": 211116272,
				"cost": 1200,
				"imgUrl": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png"
			}
		],
		itempage: 0,
		imageSize: {},
		imgUrls: [
			'https://onegoods.nosdn.127.net/resupload/2016/9/18/4082e075e9ff72110bb1d73750be065b.jpg',
			'https://onegoods.nosdn.127.net/resupload/2016/9/20/01d732b0c46a38fc07bbc887dfe23af9.jpg',
			'https://onegoods.nosdn.127.net/resupload/2016/9/19/777e4b1711fb1b0283726cb0b197e8ba.jpg',
			'https://onegoods.nosdn.127.net/resupload/2016/9/20/f2f210633ca371ea6dc56a4b8916a15d.jpg',
			'https://onegoods.nosdn.127.net/resupload/2016/9/21/33c38d5283a862b2523fe2e085355cb2.jpg',
			'https://res.126.net/p/dbqb/resupload/onlinepath/2016/7/28/0/69e1275c4460f97f2d4b26d716348892.jpg'
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		windowWidth: 320,
		sortPanelTop: '290',
		sortPanelDist: '0',
		sortPanelPos: 'relative',
		noticeIdx: 0,
		notices: [{
				"clickUrl": "dbjsbridge://go?module=detail&gid=1032&period=192",
				"goods": "海购商品 It’S SKIN 伊思 完美活肤逆时空晶钻蜗牛BB霜 50毫升",
				"name": "奥特曼",
				"time": "2分钟前"
			}, {
				"clickUrl": "dbjsbridge://go?module=detail&gid=1122&period=646",
				"goods": "海购商品 1箱20盒 |五木 梅紫苏味乌冬面 109克",
				"name": "磊磊跳楼了",
				"time": "2分钟前"
			}, {
				"clickUrl": "dbjsbridge://go?module=detail&gid=931&period=601",
				"goods": "宝马mini  儿童脚踏三轮车",
				"name": "最后一次",
				"time": "2分钟前"
			}
		],
		"goodsList": [{
				"goods": {
					"buyUnit": 10,
					"desc": "唯一的不同，是处处不同",
					"id": 1093,
					"imgUrl": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
					"name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
					"tag": "ten"
				},
				"period": 211116272,
				"takeRate": 0.01,
				"takeChances": 70,
				"totalChances": 8090,
				"winner": "铁木真"
			}, {
				"goods": {
					"buyUnit": 1,
					"desc": "颜色随机",
					"id": 348,
					"imgUrl": "http://res.126.net/p/dbqb/one/98/348/b73494078d526fcb5ead4201ec29daef.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/98/348/b73494078d526fcb5ead4201ec29daef.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/98/348/b73494078d526fcb5ead4201ec29daef.png",
					"name": "Apple Watch Sport 38毫米 铝金属表壳 运动表带",
					"tag": ""
				},
				"period": 211116207,
				"takeRate": 0.19,
				"takeChances": 632,
				"totalChances": 3288,
				"winner": "辛弃疾"
			}, {
				"goods": {
					"buyUnit": 1,
					"desc": "配备 Retina 显示器",
					"id": 510,
					"imgUrl": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "Apple MacBook Pro 15.4英寸笔记本",
					"tag": ""
				},
				"period": 211116244,
				"takeRate": 0.26,
				"takeChances": 3760,
				"totalChances": 14288,
				"winner": "舒克贝塔"
			}, {
				"goods": {
					"buyUnit": 10,
					"desc": "超长续航 智能防盗",
					"id": 1168,
					"imgUrl": "http://res.126.net/p/dbqb/one/168/1168/6abc05894e903b9749166c224d739838.png",
					"name": "【预售】小牛电动N1电动踏板车 动力版 约11月20日发货",
					"tag": "ten"
				},
				"period": 211116256,
				"takeRate": 0.05,
				"takeChances": 300,
				"totalChances": 5990,
				"winner": "哪吒"
			}, {
				"goods": {
					"buyUnit": 1,
					"desc": "因工艺原因重量略有浮动",
					"id": 979,
					"imgUrl": "http://res.126.net/p/dbqb/one/229/979/defc72da941c4705fcdbb2a7ee03dbf1.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "周生生 黄金 足金旋转木马吊坠",
					"tag": ""
				},
				"period": 211116138,
				"takeRate": 0.17,
				"takeChances": 514,
				"totalChances": 2999,
				"winner": "朱耷"
			}, {
				"goods": {
					"buyUnit": 10,
					"desc": "颜色随机 支持专柜验货",
					"id": 673,
					"imgUrl": "http://res.126.net/p/dbqb/one/173/673/47c126b7bb39524d3d62151b2ef76629.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "Coach 蔻驰 抛光粒面皮革铆钉COACH CENTRAL手提包",
					"tag": "ten"
				},
				"period": 211115685,
				"takeRate": 0.13,
				"takeChances": 630,
				"totalChances": 4950,
				"winner": "李元吉"
			}, {
				"goods": {
					"buyUnit": 10,
					"desc": "颜色随机 美式奢侈生活风格的代表",
					"id": 943,
					"imgUrl": "http://res.126.net/p/dbqb/one/193/943/0994bfbd54c668fed6db160afd84eff4.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "MICHAEL KORS 迈克高仕 十字纹皮革钱包",
					"tag": "ten"
				},
				"period": 211114592,
				"takeRate": 0.45,
				"takeChances": 680,
				"totalChances": 1500,
				"winner": "程咬金"
			}, {
				"goods": {
					"buyUnit": 1,
					"desc": "吴晓波酿吴酒 一半清醒一半醉",
					"id": 1095,
					"imgUrl": "http://res.126.net/p/dbqb/one/95/1095/0176dd96dcc8b4188e6b2bbf85102304.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "【预售】吴酒 2016年贺年年酒 圣诞节开始派送",
					"tag": ""
				},
				"period": 211116226,
				"takeRate": 0.04,
				"takeChances": 7,
				"totalChances": 199,
				"winner": "mark"
			}, {
				"goods": {
					"buyUnit": 10,
					"desc": "珍贵绝伦",
					"id": 140,
					"imgUrl": "http://res.126.net/p/dbqb/one/140/140/ea7f0892ce49c332e2280513ee94a439.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "中国黄金 AU9999万足金50g薄片",
					"tag": "ten"
				},
				"period": 211116228,
				"takeRate": 0.95,
				"takeChances": 14200,
				"totalChances": 14990,
				"winner": "ken"
			}, {
				"goods": {
					"buyUnit": 10,
					"desc": "唯一的不同，是处处不同",
					"id": 1093,
					"imgUrl": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
					"imgUrl2": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"imgUrl3": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
					"name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
					"tag": "ten"
				},
				"period": 211116272,
				"takeRate": 0.01,
				"takeChances": 70,
				"totalChances": 8090,
				"winner": "spider-man"
			}
		],
		"orderList": [],
		animationNotice: {}
	},
	getData: function () {
		var gData = this.globalData;
		return gData
	},
	getOrderData: function () {
		var me = this
        var orderData= me.globalData.orderData
    	//console.log(orderData)
		return orderData
	},
	changeData: function (e) {
		var cData = this.data.s1;
		cData.a = "1"; //先修改json值
		this.setData({ //再set值
			s1: cData
		})
	},
	setCusMsg: function (data) {
		var orderData = this.globalData.orderList
            //console.log(data)
	},
    onload: function(){
        //console.log('onLoad')
//        getOrderData()
    },addOrderList: function(index){
        var goodsList= this.globalData["goodsList"]
        var item= goodsList[index]
        item["setMore"]= 1
        console.log(item)
        var orderList= this.globalData["orderList"]
        var lenth= orderList.length
        this.showOrderList("BEFORE ")
        orderList.splice(lenth,0,item)
        this.showOrderList("AFTER")
        this.setStorage("orderList", orderList)
    },delOrderList: function(index){
        console.log(index)
        this.showOrderList("BEFORE")
        this.globalData["orderList"].splice(index,1)
        this.showOrderList("AFTER")
    },setMore: function(index, tempset){
        console.log(index)
        console.log(this.globalData["orderList"][index])
        console.log(this.globalData["orderList"][index])
        this.globalData["orderList"][index]["setMore"]= tempset
    },setStorage(k,v){
        try {
            wx.setStorageSync(k, v)
        } catch (e) {
            console.log(e)
        }
    },getStorage(k){
        wx.getStorage({
            key: label,
            success: function (res) {
                console.log(res.data)
            }
        })
    }
})
