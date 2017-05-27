import { SA } from '../../selectarea/selectarea';
import { Gesture } from '../../utils/util';
const date = new Date()
const years = []
const months = []
const days = []
//var config = require("../../config.js")

Page({ 
    data: {
        items: ['开始滑动'],
        out: true,
        name: "姓名",
        place: "地址",
        phonenum: "电话",
        address: wx.getStorage({
            key: "address"
        }),
    },
    onLoad: function (options) {
        var me= this
        SA.load(this, {
            showDistrict: true // 省市区三级（true，默认值）／省市两级（false）
        }); // 初始化区域框
        wx.getStorage({
            key: "address",
            success: function(res){
                console.log("success", JSON.stringify(res.data))    
                me.setData({
                    address: res.data
                })
            },
            fail: function(err){
                console.log("err: ", err)    
            }
        });
        wx.getStorage({
            key: "name",
            success: function(res){
                console.log("success", JSON.stringify(res.data))    
                me.setData({
                    name: res.data
                })
            },
            fail: function(err){
                console.log("err: ", err)    
            }
        });
        wx.getStorage({
            key: "place",
            success: function(res){
                console.log("success", res)    
                me.setData({
                    place: res.data
                })
            },
            fail: function(err){
                console.log("err: ", err)    
            }
        });
        wx.getStorage({
            key: "phonenum",
            success: function(res){
                console.log("success", res)    
                me.setData({
                    phonenum: res.data
                })
            },
            fail: function(err){
                console.log("err: ", err)    
            }
        });
        console.log(address, name, phonenum, place)
    },
    onHide: function (options) {
        console.log("onHide")
    },
    onUnload: function (options) {
        console.log("onUnload")
        console.log("SA.saveleave(this);")
        SA.saveleave(this)
    },
    choosearea: function(){ // 页面弹框触发事件
        console.log('chossearea() handler')
        SA.choosearea(this);
    },
    tapProvince: function(e) { // 点击省份
        SA.tapProvince(e, this);
    },
    tapCity: function(e) { // 点击城市
        SA.tapCity(e, this);
    },
    tapDistrict: function(e) { // 点击区域
        SA.tapDistrict(e, this);
    },
    cancel: function() { // 取消选择
        SA.cancel(this);
    },
    iconfirm: function(e) { // 确认选择区域
        SA.iconfirm(e, this);
    },
    touchstart: function(e) {
        /**
         * 监听touch开始
         */
        Gesture.touchstart(e, this);
    },
    saveleave: function(e) {
        console.log("test.saveleave", e)
        SA.saveleave(this)        
    },
    touchmove: function(e) {
        // 是否为左滑事件
        if (Gesture.isLeftSlide(e, this)) {
            wx.showToast({
                title: '左滑',
                icon: 'success',
                duration: 800
            })
        }
        // 是否为右滑事件
        if (Gesture.isRightSlide(e, this)) {
            wx.showToast({
                title: '右滑',
                icon: 'success',
                duration: 800
            })
        }
    },
    inplace: function(e){
        this.setData({
          place: e.detail.value       
        })
    },
    inname: function(e){
        this.setData({
          name: e.detail.value       
        })
    },
    inmobile: function(e){
        this.setData({
          phonenum: e.detail.value       
        })
        SA.saveleave(this);
    },
})