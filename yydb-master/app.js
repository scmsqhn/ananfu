//app.js
var aldstat = require("./utils/ald-stat.js");
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
        '../../resources/images/01.jpg',
        '../../resources/images/03.jpg',
        '../../resources/images/04.jpg',
        '../../resources/images/05.jpg',
        '../../resources/images/06.jpg',
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
      goodsList: [
      ],
      goodsList1: [{
          "_id": 'ObjectId("59254fa234426eac99fe4eba")',
          "BUYUNITS": 1,
          "DESC": "爆款老人机",
          "IMGURL": "https://img.alicdn.com/imgextra/i3/1764632693/TB2W8vEqolnpuFjSZFjXXXTaVXa_!!1764632693.jpg",
          "IMGURL2": "https://img.alicdn.com/imgextra/i3/1764632693/TB2hTz5qdRopuFjSZFtXXcanpXa_!!1764632693.jpg",
          "IMGURL3": "https://img.alicdn.com/imgextra/i3/1764632693/TB2vSJAk1tTMeFjSZFOXXaTiVXa_!!1764632693.jpg",
          "IMGURL4": "https://img.alicdn.com/imgextra/i4/1764632693/TB2PHi4XCB0XKJjSZFsXXaxfpXa_!!1764632693.jpg",
          "NAME": "长虹老人机GA958双卡双待移动4G喜庆中国红",
          "TAG": "null",
          "PERIOD": 100001,
          "TAKERATE": 0.1,
          "TAKECHANCES": 13,
          "TOTALCHANCES": 129,
          "WINNER": "null"
        }, {
          "_id": 'ObjectId("59254fa234426eac99fe4ebb")',
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
          "_id": 'ObjectId("59254fa234426eac99fe4ebc")',
          "BUYUNITS": 1,
          "DESC": "长虹（CHANGHONG）A100翻盖智能手机移动4G双卡双待黑金色",
          "IMGURL": "https://img10.360buyimg.com/imgzone/jfs/t2893/361/424446902/367757/461c14df/57124ad2N0cfa0ef2.jpg",
          "IMGURL2": "https://img10.360buyimg.com/imgzone/jfs/t2299/338/2706359726/263214/ea8efeec/57124ad4Ndfa5a7d2.jpg",
          "IMGURL3": "https://img10.360buyimg.com/imgzone/jfs/t2584/326/427126115/48876/dca22ea0/57124ad5N90514d29.jpg",
          "IMGURL4": "https://img10.360buyimg.com/imgzone/jfs/t1858/196/2683932497/212489/482fa6cc/57124ad5Na94b0047.jpg",
          "NAME": "长虹（CHANGHONG）A100翻盖智能手机",
          "TAG": "",
          "PERIOD": 100003,
          "TAKERATE": 0,
          "TAKECHANCES": 0,
          "TOTALCHANCES": 999,
          "WINNER": "null"
        }, {
          "_id": 'ObjectId("59254fa234426eac99fe4ebd")',
          "BUYUNITS": 1,
          "DESC": "50元 手机充值卡",
          "IMGURL": "http://hellorfimg.zcool.cn/preview/478543384.jpg",
          "IMGURL2": "http://hellorfimg.zcool.cn/preview/494733349.jpg",
          "IMGURL3": "http://hellorfimg.zcool.cn/preview/562190812.jpg",
          "IMGURL4": "http://hellorfimg.zcool.cn/preview/541386352.jpg",
          "NAME": "通用 手机 充值卡 50元",
          "TAG": "null",
          "PERIOD": 100004,
          "TAKERATE": 0,
          "TAKECHANCES": 0,
          "TOTALCHANCES": 50,
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
      console.log("syncData: function(buyhistory)=", datain)
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
    loginAnanfu: function () {
      var me = this
        me.getUserInfo(console.log) //重新登录
    },
    checkSession: function () {
      var me = this;
      if (this.timeSatis(60000) || !this.globalData.userInfo) {
        wx.checkSession({
          success: function () {
            //session 未过期，并且在本生命周期一直有效
            console.log("[x] 登录未过期,可以使用,session is inuse, OK")
            me.getUserInfo(console.log) //重新登录
          },
          fail: function () {
            //登录态过期
            console.log("登陆过期,重新登陆")
            me.getUserInfo(console.log) //重新登录
          }
        })
      }
    },
    thirdLogin: function (code, encryptedData, iv, userinfo) {
      var me = this
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
          console.log('SUCC 服务器返回', res.data);
          if (200 == res.statusCode) {
            console.log("res.data= ", res.data)
            //getApp().syncData(res.data)
            getApp().setTimePre()
            wx.hideToast();
            me.getBuyHistory(res.data.openid)
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
      var me = this;
        console.log("onLaunch, openid= ", wx.getStorageSync("openid"));
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        var openid = wx.getStorageSync("openid")
        console.log("[x] 获得openid=", openid)
        console.log(openid.length)
        console.log(openid != undefined)
        console.log(openid.length != 0)
        me.getGoodsList()
        if (openid != undefined && openid.length != 0) {
          me.getBuyHistory(openid)
          console.log("[x] 通过openid,访问安安福服务器,获得数据")
        } else {
          me.loginAnanfu()
        }
        me.onReady()
    },
    onReady: function () {
      var me = this
        var gl = wx.getStorageSync("goodsList")
        var bh = wx.getStorageSync("buyhistory")
        me.globalData.goodsList = gl
        me.globalData.buyhistory = bh
        console.log('[x] 保存goodsList buyhistory在本地数据setData')
    },
    getUserInfo: function (cb) {
      console.log("[x] app.getUserInfo传入参数cb: ", cb)
      var that = this;
      //调用登录接口
      wx.login({
        success: function (e) {
          console.log('[x] 微信登录成功 wx.login吧v被选中部门每次 (success)')
          var code = e.code;
          console.log('[x] 调用登录接口,获得code= ', code)
          if (code) {
            wx.request({
              url: config.service.sync,
              data: {
                code: 1007,
                ecode: code
              },
              method: 'GET',
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                if (200 == res.statusCode) {
                  var openid = res.data.openid;
                  console.log('[x] 从服务器返回的OPENID: ', openid);
                  wx.getUserInfo({
                      success: function (res) {
                        var encryptedData = encodeURIComponent(res.encryptedData);
                        console.log("code=", code, "\ncncryptedData=", encryptedData, "\nres.iv=", res.iv, "\nres.userinfo=", res.userInfo)
                        var item = {}
                        item["userinfo"] = res.userInfo;
                        item["openid"] = openid
                        console.log("[x] 登录信息,item= ", item)
                        wx.setStorageSync("userInfo", res.userInfo)
                        wx.setStorageSync("code", code)
                        wx.setStorageSync("openid", openid)
                        wx.setStorageSync("intime", Date.now())
                        that.thirdLogin(code, encryptedData, res.iv, res.userInfo)
                      }
                    })
                }
              },
              fail: function (e) {
                console.log('[x] fail=', e)
                wx.hideToast();
              },
              complete: function () {
                console.log('[x] complete')
              }
            });

            /*
             */
          }
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
    getDatafromStor() {
      this.globalData["goodsList"] = getStorage("goodsList")
        this.globalData["orderList"] = getStorage("orderList")
        this.globalData["buyhistory"] = getStorage("buyhistory")
    },
    onload: function () {
      console.log('onLoad')
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
          var openId = res.data.openid;
          console.log('[x] 获得OPENID: ', openId)
          wx.setStorageSync("openId", openId)
        }
      })
    },
    addOrderList: function (index) {

      console.log('this.globalData["goodsList"]=', this.globalData["goodsList"])
      console.log('index= ', index)
      var item = this.globalData["goodsList"][index]
        var goodsList = this.globalData["goodsList"]
        console.log(item)
        console.log(item)
        var orderList = this.globalData["orderList"]
        var lenth = orderList.length
        this.showOrderList("BEFORE ")
        for (var i in orderList) {
          console.log(item["PERIOD"] + "==" + orderList[i]["PERIOD"])
          if (item["PERIOD"] == orderList[i]["PERIOD"]) {
            var num = orderList[i]["setMore"]
              orderList[i]["setMore"] = num + 1
              console.log("setMore= " + orderList[i]["setMore"])
              console.log("已经添加过该商品,setMore+1,return")
              this.setStorage("orderList", orderList)
              return
          }
        }
        console.log("初次添加该商品")
        console.log(item)
        item.setMore = 1
        console.log(orderList)
        orderList.splice(lenth, 0, item)
        console.log(orderList)
        console.log(item)
        this.showOrderList("AFTER")
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
    setStorage: function (k, v) {
      try {
        wx.setStorageSync(k, v)
      } catch (e) {
        console.log(e)
      }
    },
    getStorage: function (k) {
      wx.getStorage({
        key: k,
        success: function (res) {
          console.log(res.data)
        }
      })
    },
    getGoodsList: function () {
      console.log("app.getGoodsList==")
      var me = this
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
              console.log("读取goodsList res.data= ", res.data)
              me.globalData["goodsList"] = res.data
              getApp().setTimePre()
            }
          },
          fail: function (e) {
            // fail
            console.log('FAIL 服务器返回错误: ', e);
            wx.hideToast();
          },
          complete: function () {
            console.log('三方服务器登陆完毕,COMPLETE ');
            console.log('获得商品数据,并写入wx.storage', me.globalData.goodsList)
            wx.setStorageSync("goodsList", me.globalData.goodsList)
          }
        });
    },
    getBuyHistory: function (myopenid) {
      console.log("app.getBuyHistory")
      var me = this
        console.log('[x] 获得OPENID: ', wx.getStorageSync("openid"))
        wx.request({
          url: config.service.sync,
          data: {
            code: 1003,
            openid: myopenid//"o44Xt0ESHNe6SSyVL9aP6B_noTdY"
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log('SUCC 购买历史服务器返回' + res.data);
            if (200 == res.statusCode) {
              console.log("[x] app.js 读取下单记录返回res.data= ", res.data)
              me.globalData["buyhistory"] = res.data
                getApp().setTimePre()
                wx.setStorageSync("buyhistory", res.data)
            }
          },
          fail: function (e) {
            console.log('FAIL 服务器返回错误: ', e);
            wx.hideToast();
          },
          complete: function () {
            console.log('三方服务器登陆完毕,COMPLETE ');
            console.log('获得购买历史: ', me.globalData.buyhistory)
          }
        });
    },
    getMyUserInfo: function (cb) {
      console.log("getMyUserInfo 传入cb: ", cb)
      var that = this
        if (this.globalData.userInfo) {
          typeof cb == "function" && cb(this.globalData.userInfo)
          console.log("getMyUserInfo this.globalData.userInfo=", this.globalData.userInfo)
        } else {
          //调用登录接口
          wx.login({
            success: function () {
              wx.getUserInfo({
                success: function (res) {
                  that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
              })
            }
          })
        }
    },
  })
