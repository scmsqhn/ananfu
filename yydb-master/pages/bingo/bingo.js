var app = getApp()
Page( {
  data:app.getData(),
  onReady: function() {

  },
  onLoad: function() {
    var me = this;
    var animation = wx.createAnimation( {
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
  startNotice: function() {
    var me = this;
    var notices = me.data.notices || [];
    if( notices.length == 0 ) {
      return;
    }

    var animation = me.animation;
    //animation.translateY( -12 ).opacity( 0 ).step();
    animation.translateY( 0 ).opacity( 1 ).step( { duration: 0 });
    me.setData( { animationNotice: animation.export() });

    var noticeIdx = me.data.noticeIdx + 1;
    if( noticeIdx == notices.length ) {
      noticeIdx = 0;
    }

    // 更换数据
    setTimeout( function() {
      me.setData( {
        noticeIdx: noticeIdx
      });
    }, 400 );

    // 启动下一次动画
    setTimeout( function() {
      me.startNotice();
    }, 5000 );
  },
  onShow: function() {
    this.startNotice();

  },
  onToTop: function( e ) {
    if( e.detail.scrollTop >= 290 ) {
      this.setData( { sortPanelPos: 'fixed' });
    } else {
      this.setData( { sortPanelPos: 'relative' });
    }
    //console.log( e.detail.scrollTop )
  },

  onClick: function(e){
    ////console.log(e.srcElement.dataset.index)
	var index = e.currentTarget.dataset.index//获得页面index
	//console.log("index="+index)
	//console.log("../item/item?index="+index)
	wx.navigateTo({url: "../item/item?index="+index});
  },
  toFaq: function(e){
	wx.navigateTo({url: "../faq/faq"});
	//console.log("toFaq")
  },
  
  onAdd2List: function(e){
	var keyword = e.detail.value;  
	wx.request({
		url:config.loginUrl.order,
		data:{item:12345},
		header: {'Content-Type': 'application/json'},
		success: function(res){
			//console.log(res)
		}
	})
	//console.log("toFaq")
  },

})
