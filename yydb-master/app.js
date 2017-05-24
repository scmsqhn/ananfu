//app.js
var config = require('./config')

	App({
		globalData: {
			timepre: -1,
			openid: null,
			isLogin: false,
			buyhistory: null,
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
					"goods": "老人机爆款 958 关爱常伴",
					"name": "brud.peter",
					"time": "2分钟前"
				}, {
					"clickUrl": "dbjsbridge://go?module=detail&gid=1122&period=646",
					"goods": "老人机爆款 958 关爱常伴",
					"name": "julia.roberts",
					"time": "5分钟前"
				}, {
					"clickUrl": "dbjsbridge://go?module=detail&gid=931&period=601",
					"goods": "宝马mini  儿童脚踏三轮车",
					"name": "robin.williams",
					"time": "12分钟前"
				}
			],
			"goodsList2": [{
					"goods": {
						"buyUnit": 1,
						"desc": "爆款老人机",
						"id": 1093,
						"imgUrl": "https://img14.360buyimg.com/n5/s54x54_jfs/t2317/302/996878454/224727/8368a723/563daf4eNbe7a411a.jpg",
						"imgUrl2": "https://img11.360buyimg.com/n9/s40x40_jfs/t1975/69/1097308100/161164/4c47eb18/563daf22N40d7b07f.jpg",
						"imgUrl3": "https://img12.360buyimg.com/n9/s40x40_jfs/t2461/272/990038759/205621/a0cca27/563daf2eN72bceb32.jpg",
						"imgUrl4": "https://img13.360buyimg.com/n9/s40x40_jfs/t2569/32/236948482/188449/54c801ac/563daf3fNfe796259.jpg",
						"name": "长虹老人机 GA958 双卡双待 移动4G 喜庆中国红",
						"tag": "ten"
					},
					"period": 100001,
					"takeRate": 0.10,
					"takeChances": 13,
					"totalChances": 129,
					"winner": "null"
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
            "goodsList":null,
			"goodsList1": [{
					"_id": "591ea0b24470669ae0380d43",
					"BUYUNITS": 1,
					"DESC": "爆款老人机",
					"IMGURL": "https://img.alicdn.com/imgextra/i3/1764632693/TB2W8vEqolnpuFjSZFjXXXTaVXa_!!1764632693.jpg",
					"IMGURL2": "https://img.alicdn.com/imgextra/i3/1764632693/TB2hTz5qdRopuFjSZFtXXcanpXa_!!1764632693.jpg",
					"IMGURL3": "https://img.alicdn.com/imgextra/i3/1764632693/TB2vSJAk1tTMeFjSZFOXXaTiVXa_!!1764632693.jpg",
					"IMGURL4": "https://img.alicdn.com/imgextra/i4/1764632693/TB2PHi4XCB0XKJjSZFsXXaxfpXa_!!1764632693.jpg",
                    "IMGURL5": "https://img.alicdn.com/imgextra/i4/1764632693/TB25Yi4XCB0XKJjSZFsXXaxfpXa_!!1764632693.jpg",
                    "IMGURL6": "https://img.alicdn.com/imgextra/i4/1764632693/TB25Yi4XCB0XKJjSZFsXXaxfpXa_!!1764632693.jpg",
					"NAME": "长虹老人机GA958双卡双待移动4G喜庆中国红",
					"TAG": "null",
					"PERIOD": 100001,
					"TAKERATE": 0.1,
					"TAKECHANCES": 13,
					"TOTALCHANCES": 129,
					"WINNER": "null"
				}, {
					"_id": "591ea0b24470669ae0380d44",
					"BUYUNITS": 10,
					"DESC": "长虹49LR1000 4K",
					"IMGURL": "https://img30.360buyimg.com/sku/jfs/t4447/110/4263782020/121315/b4150356/590c4c0dN56e4bba0.jpg",
					"IMGURL2": "https://img30.360buyimg.com/sku/jfs/t5137/44/1165958953/149903/4f8a3cf9/590c4c10Nf4f3b14e.jpg",
					"IMGURL3": "https://img30.360buyimg.com/sku/jfs/t4711/167/4218045420/154008/31447b80/590c4c11Ne64bd219.jpg",
					"IMGURL4": "https://img30.360buyimg.com/sku/jfs/t4651/160/4198495043/137774/f64c0bfb/590c4c0fN2f562791.jpg",
					"NAME": "长虹49LR1000 4K 超清智能互联网电视49英寸孝芯",
					"TAG": "null",
					"PERIOD": 100002,
					"TAKERATE": 0,
					"TAKECHANCES": 0,
					"TOTALCHANCES": 3680,
					"WINNER": "null"
				}, {
					"_id": "591ea0b24470669ae0380d45",
					"BUYUNITS": 1,
					"DESC": "长虹（CHANGHONG）A100翻盖智能手机移动4G双卡双待黑金色",
					"IMGURL": "https://img10.360buyimg.com/imgzone/jfs/t2893/361/424446902/367757/461c14df/57124ad2N0cfa0ef2.jpg",
					"IMGURL2": "https://img10.360buyimg.com/imgzone/jfs/t2299/338/2706359726/263214/ea8efeec/57124ad4Ndfa5a7d2.jpg",
					"IMGURL3": "https://img10.360buyimg.com/imgzone/jfs/t2584/326/427126115/48876/dca22ea0/57124ad5N90514d29.jpg",
					"IMGURL4": "http://img10.360buyimg.com/imgzone/jfs/t1858/196/2683932497/212489/482fa6cc/57124ad5Na94b0047.jpg",
					"NAME": "长虹（CHANGHONG）A100翻盖智能手机",
					"TAG": "",
					"PERIOD": 100003,
					"TAKERATE": 0,
					"TAKECHANCES": 0,
					"TOTALCHANCES": 999,
					"WINNER": "null"
				},
			],
			animationNotice: {}
		},
		showOrderList: function (note) {
			var orderList = this.globalData["orderList"]
				//console.log("orderList=")
				//console.log(orderList)
				console.log(this.globalData["orderList"])
				for (var i = 0; i < orderList.length; i++) {
					//console.log(orderList[i])
				}
		},
		syncData: function (datain) {
			console.log("syncData: function(buyhistory)=" + datain)
			this.globalData["buyhistory"] = datain
			console.log('app.syncData 同步后 buyhistory 数据= ', this.globalData["buyhistory"])
		},
		timeSatis: function (trigger) {
			if (Date.now() - this.globalData.timepre > trigger) {
				return true
			}
			return false
		},
		setTimePre: function () {
			this.globalData.timepre = Date.now()
		},
		checkSession: function () {
			if (this.timeSatis(60000) || !this.globalData.userInfo) {
				wx.checkSession({
					success: function () {
						//session 未过期，并且在本生命周期一直有效
						console.log("登陆未过期,可以使用,session is inuse, OK")
					},
					fail: function () {
						//登录态过期
						console.log("登陆过期,重新登陆")
						this.getUserInfo(console.log) //重新登录
					}
				})
			}
		},
		thirdLogin: function (code, encryptedData, iv, userinfo) {
			wx.showToast({
				title: '正在登录...',
				icon: 'loading',
				duration: 10000
			});
			wx.request({
				url: config.service.loginUrl,
				data: {
					code: code,
					encryptedData: encryptedData,
					iv: iv,
					userinfo: userinfo
				},
				method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
				header: {
					'content-type': 'application/json'
				}, // 设置请求的 header
				success: function (res) {
					// success
					console.log('SUCC 服务器返回' + res.data);
					if (200 == res.statusCode) {
						console.log("res.data= ", res.data)
						getApp().syncData(res.data)
						getApp().setTimePre()
       					wx.hideToast();
					}
				},
				fail: function (e) {
					// fail
					console.log('FAIL 服务器返回' + res.data);
					wx.hideToast();
				},
				complete: function () {
					console.log('三方服务器登陆完毕,COMPLETE ');
				}
			});
		},
		onLaunch: function () {
			//调用API从本地缓存中获取数据
			var logs = wx.getStorageSync('logs') || []
            logs.unshift(Date.now())
            wx.setStorageSync('logs', logs)
            this.getGoodsList()
            this.checkSession()
		},
		getUserInfo: function (cb) {
			var that = this;
			//调用登录接口
			wx.login({
				success: function (e) {
					console.log('wx.login(sunccess)')
					var code = e.code
						console.log("code=" + code)
						wx.getUserInfo({
							success: function (res) {
								console.log('wx.getUserInfo(sunccess)')
								console.log('wxgetUserInfo successd........');
								var encryptedData = encodeURIComponent(res.encryptedData);
								console.log("code=", code, "\ncncryptedData=", encryptedData, "\nres.iv=", res.iv, "\nres.userinfo=", res.userInfo)
								that.thirdLogin(code, encryptedData, res.iv, res.userInfo) //调用服务器api
							}
						})
				}
			});
		},
		getImgUrls: function (index) {
			var gData = this.globalData
    		var imgDatas = gData["goodsList"]
			var imgUrls = {
				img1: (imgDatas[index].IMGURL),
				img2: (imgDatas[index].IMGURL2),
				img3: (imgDatas[index].IMGURL3)
			}
			return imgUrls
		},
		getData: function () {
			var gData = this.globalData;
			return gData
		},
		getHistoryData: function () {
			var gData = this.globalData.buyhistory;
			return gData
		},
		getOrderData: function () {
			var me = this
				var orderData = me.globalData.orderData
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
			var goodsList = this.globalData.goodsList
			var orderList = this.globalData.orderList
				goodsList = data.goodsList
				orderList = data.orderList
				console.log(goodsList)
				console.log(orderList)
		},
        getDatafromStor(){
            this.globalData["goodsList"]= getStorage("goodsList")
            this.globalData["orderList"]= getStorage("orderList")
            this.globalData["buyhistory"]= getStorage("buyhistory")
        },
		onload: function () {
			console.log('onLoad')
			//        getOrderData()
		},
		addOrderList: function (index) {
				var item = this.globalData["goodsList"][index]
				var goodsList = this.globalData["goodsList"]
                console.log(item)
				console.log(item)
				var orderList = this.globalData["orderList"]
				var lenth = orderList.length
				this.showOrderList("BEFORE ")
                for(var i in orderList){
                    console.log(item["PERIOD"]+"=="+orderList[i]["PERIOD"])
                    if(item["PERIOD"]==orderList[i]["PERIOD"]){
                        var num= orderList[i]["setMore"]
                        orderList[i]["setMore"]= num+1
                        console.log("setMore= "+orderList[i]["setMore"])
                        console.log("已经添加过该商品,setMore+1,return")
                        this.setStorage("orderList", orderList)
                        return
                    }
                }
                console.log("初次添加该商品")
   				item["setMore"] = 1
                orderList.splice(lenth, 0, item)
                console.log(item)
                this.showOrderList("AFTER")
				this.setStorage("orderList", orderList)
                console.log("return")
                this.setStorage("orderList", orderList)
                return
		},
		delOrderList: function (index) {
			console.log(index)
			this.showOrderList("BEFORE")
			this.globalData["orderList"].splice(index, 1)
			this.showOrderList("AFTER")
            app.setStorage("orderList", orderList)
		},
		setMore: function (index, tempset) {
			console.log(index)
			console.log(this.globalData["orderList"][index])
			console.log(this.globalData["orderList"][index])
			this.globalData["orderList"][index]["setMore"] = tempset
		},
		setStorage: function(k, v) {
			try {
				wx.setStorageSync(k, v)
			} catch (e) {
				console.log(e)
			}
		},
		getStorage: function(k) {
			wx.getStorage({
				key: k,
				success: function (res) {
					console.log(res.data)
				}
			})
		},
   		getGoodsList: function() {
            console.log("app.getGoodsList==")
            var me= this
			wx.request({
				url: config.service.sync,
				data: {
					code: 1001,
					data: "{}"
				},
				method: 'GET',
				header: {
					'content-type': 'application/json'
				}, 
				success: function (res) {
					console.log('SUCC GOODSLIST 服务器返回' + res.data);
					if (200 == res.statusCode) { 
						console.log("读取下单记录返回res.data= ", res.data)
						me.globalData["goodsList"]= res.data
						getApp().setTimePre()
					}
				},
				fail: function (e) {
					// fail
					console.log('FAIL 服务器返回错误: ', e);
					wx.hideToast( );
				},
				complete: function ( ) {
					console.log('三方服务器登陆完毕,COMPLETE ');
                    console.log('获得购买历史: ', me.globalData.buyhistory)
				}
			});
		},
   		getBuyHistory: function() {
            console.log("app.getBuyHistory")
            var me= this
			wx.request({
				url: config.service.sync,
				data: {
					code: 1003,
					openid: "o44Xt0ESHNe6SSyVL9aP6B_noTdY"
				},
				method: 'GET',
				header: {
					'content-type': 'application/json'
				}, 
				success: function (res) {
					console.log('SUCC 购买历史服务器返回' + res.data);
					if (200 == res.statusCode) { 
						console.log("读取下单记录返回res.data= ", res.data)
						me.globalData.buyhistory= res.data
						getApp().setTimePre()
					}
				},
				fail: function (e) {
					// fail
					console.log('FAIL 服务器返回错误: ', e);
					wx.hideToast( );
				},
				complete: function ( ) {
					console.log('三方服务器登陆完毕,COMPLETE ');
                    console.log('获得购买历史: ', me.globalData.buyhistory)
				}
			});
		},
	})
