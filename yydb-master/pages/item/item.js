var app = getApp()
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    globalData: app.getData()
    ,itemData:[]
    ,toView: 'green'
  	,index:1
    ,toImg:{}
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
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
  onLoad: function(option) {
    var me = this;
	//console.log("===")
	console.log("options.index="+option.index)
	me.setData({
		index:option.index,
        itemdata:app.getData()["goodsList"][option.index]
	})
	console.log("itemdata="+this.itemdata)
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
    console.log('onLoad');
    console.log('index= ' + this.index);
  },
})