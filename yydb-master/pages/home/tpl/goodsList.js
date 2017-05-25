var app = getApp()
Page({
  data: {
    goodsList: app.globalData["goodsList"]
  },
  onReady: function(){
    console.log( 'tpl item onReady' );
    console.log("goodsList data=", getApp().globalData["goodsList"][1])
  },
  onLoad: function(){
    console.log('onLoad')
    this.setData({
        goodsList: app.getData()["goodsList"]
    })
    console.log("goodsList", goodsList)
  },
  onShow: function() {
    console.log( 'onShow' );
  },
  onToTop: function( e ) {
    //console.log( e.detail.scrollTop )
  },
})
