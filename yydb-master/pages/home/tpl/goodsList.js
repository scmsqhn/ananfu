var app = getApp()
Page( {
  onReady: function() {

    console.log( 'tpl item onReady' );
    console.log("goodsList data=", getApp().globalData["goodsList"][1])
  },
  onLoad: function() {
    //console.log( 'onLoad' );
  },
  onShow: function() {
    //console.log( 'onShow' );

  },
  onToTop: function( e ) {
    //console.log( e.detail.scrollTop )
  },
  

})
