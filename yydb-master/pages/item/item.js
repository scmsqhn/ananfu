var app = getApp()
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    globalData: app.getData()
    ,itemData:[]
    ,toView: 'green'
  	,index:1
    ,toImg:{}
    ,images:{}
  },
  imageLoad: function(e) {
     var $width=e.detail.width,    //获取图片真实宽度
         $height=e.detail.height,
         ratio=$width/$height;    //图片的真实宽高比例
     var viewWidth=718,           //设置图片显示宽度，左右留有16rpx边距
         viewHeight=718/ratio;    //计算的高度值
      var image=this.data.images; 
      //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
      image[e.target.dataset.index]={
         width:viewWidth,
         height:viewHeight
      }
      this.setData({
           images:image
      })
      console.log('bindload image: ', this.data.images)
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