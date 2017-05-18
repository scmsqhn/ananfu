var app = getApp()
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: app.getData(),
  data: {
    toView: 'green'
  	,index:1
    ,toImg:{}
  },
  upper: function(e) {
    //console.log(e)
  },
  lower: function(e) {
    //console.log(e)
  },
  scroll: function(e) {
    //console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  payit: function(e) {
    //console.log("start payit\r\n")
    var that = this;
    wx.login({
      success: function(res) {
        showLog('for pay purpose ,login success\r\n')
        that.getOpenId(res.code);
      }
    });
    
  },
  //获取openid
  getOpenId: function(code){
    showLog('to get getOpenId\r\n')
    var that = this;
    wx.request({ 
        url: config.service.host, 
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'code':code},
        success: function(res) {
		   showLog('get opendId succ/r/n')
           var openId = res.data.openid;
		   showLog('make the order with th opendId we got right now/r/n')
           that.xiadan(openId);
        }
    })
  },
  
  //下单
  xiadan: function(openId){
	//console.log("xiadan")
    var that = this;
    wx.request({
        url: config.service.wxPayUrl,
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'openid':openId},
        success: function(res) {
           showLog('xiadan succ')
           var prepay_id = res.data.prepay_id;
           //console.log("统一下单返回 prepay_id:"+prepay_id);
           that.sign(prepay_id);
        }
    })
  },
  //签名
  sign: function(prepay_id){
    var that = this;
    wx.request({
        url: 'https://70139330.qcloud.la/weixinpay/sign', 
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'repay_id':prepay_id},
        success: function(res) {
           that.requestPayment(res.data);

        }
    })
  },
  getImgUrls: function(index){
  	return app.getImgUrls(index)
  }
  //申请支付
  ,requestPayment: function(obj){
    wx.requestPayment({
      'timeStamp': obj.timeStamp,
      'nonceStr': obj.nonceStr,
      'package': obj.package,
      'signType': obj.signType,
      'paySign': obj.paySign,
      'success':function(res){
      },
      'fail':function(res){
      }
    })
  },  

  onLoad: function(options) {
    var me = this;
	//console.log("===")
	//console.log("options.index="+options.index)
	me.setData({
		index:options.index
        ,toImg:this.getImgUrls(options.index)
	})
	//console.log("img3="+me.data.toImg.img1)
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out',
    });
    me.animation = animation;
    wx.getSystemInfo( {
      success: function( res ) {
        me.setData( { windowWidth: res.windowWidth })
      }
    });
    //console.log( 'onLoad' );
  },
})
