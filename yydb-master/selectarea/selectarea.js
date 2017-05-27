import { Promise } from '../utils/util';
var config = require('../config.js')

/**
 *  查询接口
 */
//const API = 'http://japi.zto.cn/zto/api_utf8/baseArea?msg_type=GET_AREA&data=';
const API = config.service.addr+'?addr='

const selectArea = {
    data: {
        address: wx.getStorage({
            key: "address"
        })
    },
    /**
     * 字符长度截取
     */
    addDot: function(arr) {
        if (arr instanceof Array) {
            arr.map(val => {
                if (val.fullName.length > 4) {
                    val.fullNameDot = val.fullName.slice(0, 4) + '...';
                    return val;
                } else {
                    val.fullNameDot = val.fullName;
                    return val;
                }
            })
        }
    },
    /**
     * 初始化区域数据
     */
    load: function(_this, opt) {
        _this.setData({
            isShow: false, // 显示区域选择框
            showDistrict: true // 默认为省市区三级区域选择
        });
        if (opt && !opt.showDistrict) {
            _this.setData({
                showDistrict: false
            });
        }
        Promise(wx.request, {
            url: API + '0',
            method: 'GET'
        }).then((province) => {
            const firstProvince = province.data.result[0];
            selectArea.addDot(province.data.result);
            /**
             * 默认选择获取的省份第一个省份数据
             */
            _this.setData({
                proviceData: province.data.result,
                'selectedProvince.index': 0,
                'selectedProvince.code': firstProvince.code,
                'selectedProvince.fullName': firstProvince.fullName,
            });
            return (
                Promise(wx.request, {
                    url: API + firstProvince.code,
                    method: 'GET'
                })
            );
        }).then((city) => {
            const firstCity = city.data.result[0];
            selectArea.addDot(city.data.result);
            _this.setData({
                cityData: city.data.result,
                'selectedCity.index': 0,
                'selectedCity.code': firstCity.code,
                'selectedCity.fullName': firstCity.fullName
            });
            /**
             * 省市二级则不请求区域
             */
            if (_this.data.showDistrict) {
                return (
                    Promise(wx.request, {
                        url: API + firstCity.code,
                        method: 'GET'
                    })
                );
            } else {
                return;
            }
        }).then((district) => {
            const firstDistrict = district.data.result[0];
            selectArea.addDot(district.data.result);
            _this.setData({
                districtData: district.data.result,
                'selectedDistrict.index': 0,
                'selectedDistrict.code': firstDistrict.code,
                'selectedDistrict.fullName': firstDistrict.fullName
            });
        }).catch((e) => {
            console.log(e);
        })
    },
    /**
     * 点击省份
     */
    tapProvince: function(e, _this) {
        const dataset = e.currentTarget.dataset;
        Promise(wx.request, {
            url: API + dataset.code,
            method: 'GET'
        }).then((city) => {
            if (city.data.result) {
                selectArea.addDot(city.data.result);
                _this.setData({
                    cityData: city.data.result,
                    'selectedProvince.code': dataset.code,
                    'selectedProvince.fullName': dataset.fullName,
                    'selectedCity.code': city.data.result[0].code,
                    'selectedCity.fullName': city.data.result[0].fullName
                });

                if (_this.data.showDistrict) {
                    return (
                        Promise(wx.request, {
                            url: API + city.data.result[0].code,
                            method: 'GET'
                        })
                    );
                } else {
                    _this.setData({
                        'selectedProvince.index': dataset.index,
                        'selectedCity.index': 0 // 默认显示第一个city
                    })
                    return;
                }


            } else {
                _this.setData({
                    cityData: [],
                    'selectedProvince.code': dataset.code,
                    'selectedProvince.fullName': dataset.fullName
                })
            }

        }).then((district) => {
            if (district.data.result) {
                selectArea.addDot(district.data.result);
                _this.setData({
                    districtData: district.data.result,
                    'selectedProvince.index': dataset.index,
                    'selectedCity.index': 0,
                    'selectedDistrict.index': 0,
                    'selectedDistrict.code': district.data.result[0].code,
                    'selectedDistrict.fullName': district.data.result[0].fullName
                });
            } else {
                _this.setData({
                    districtData: [],
                    'selectedProvince.index': dataset.index
                });
            }

        }).catch((error) => {
            console.log(error);
        })
    },
    /**
     * 点击城市
     */
    tapCity: function(e, _this) {
        const dataset = e.currentTarget.dataset;
        if (_this.data.showDistrict) {
            Promise(wx.request, {
                url: API + dataset.code,
                method: 'GET'
            }).then((district) => {
                if (district.data.result) {
                    selectArea.addDot(district.data.result);
                    _this.setData({
                        districtData: district.data.result,
                        'selectedCity.index': dataset.index,
                        'selectedCity.code': dataset.code,
                        'selectedCity.fullName': dataset.fullName,
                        'selectedDistrict.index': 0,
                        'selectedDistrict.code': district.data.result[0].code,
                        'selectedDistrict.fullName': district.data.result[0].fullName
                    });
                } else {
                    _this.setData({
                        districtData: [],
                        'selectedCity.index': dataset.index,
                        'selectedCity.code': dataset.code,
                        'selectedCity.fullName': dataset.fullName,
                        'selectedDistrict.index': 0,
                        'selectedDistrict.code': "",
                        'selectedDistrict.fullName': ""
                    });
                }

            }).catch((error) => {
                console.log(error);
            })
        } else {
            _this.setData({
                'selectedCity.index': dataset.index,
                'selectedCity.code': dataset.code,
                'selectedCity.fullName': dataset.fullName
            });
        }

    },
    /**
     * 点击区域
     */
    tapDistrict: function(e, _this) {
        const dataset = e.currentTarget.dataset;
        _this.setData({
            'selectedDistrict.index': e.currentTarget.dataset.index,
            'selectedDistrict.code': dataset.code,
            'selectedDistrict.fullName': dataset.fullName
        });
    },
    /**
     * 确认选择区域
     */
    iconfirm: function(e, _this) {
        console.log("点击确认键,保存地址")
        _this.setData({
            address: _this.data.showDistrict ? _this.data.selectedProvince.fullName + ' ' + _this.data.selectedCity.fullName + ' ' + _this.data.selectedDistrict.fullName : _this.data.selectedProvince.fullName + ' ' + _this.data.selectedCity.fullName,
            isShow: false,
            selectedCode: _this.data.showDistrict ? _this.data.selectedDistrict.code : _this.data.selectedCity.code
        })
        console.log("_this.getData:", _this.data.address)
    },
    /**
     * 取消选择
     */
    cancel: function(_this) {
        _this.setData({
            isShow: false
        })
    },
    /**
     * 页面选址触发事件
     */
    choosearea: function(_this) {
        _this.setData({
            isShow: true
        })
    },
    /**
     *保存离开
     **/
    saveleave: function(_this){
        console.log("_this.address,", _this.data.address)
        wx.setStorage({
            key: "address",
            data: _this.data.address,
            sunccess: function(){
                console.log("save address", data)
            },
            fail:function(){
            }
        });
        console.log("_this.data.name,", _this.data.name)
        wx.setStorage({
            key: "name",
            data: _this.data.name,
            sunccess: function(){
                console.log("save address", data)
            },
            fail:function(){
            }
        });
        console.log("_this.data.phonenum,", _this.data.phonenum)
        wx.setStorage({
            key: "phonenum",
            data: _this.data.phonenum,
            sunccess: function(){
                console.log("save address", data)
            },
            fail:function(){
            }
        });
        console.log("_this.data.place,", _this.data.place)
        wx.setStorage({
            key: "place",
            data: _this.data.place,
            sunccess: function(){
                console.log("save address", data)
            },
            fail:function(){
            }
        });
        wx.getStorage({
            key: "address",
            success: function(res){
                console.log("success", res)    
                var address= res
                console.log("onunload 测试数据存储 address: ", address)
            },
            fail: function(err){
                console.log("err: ", err)    
            }
        });
    },
}

module.exports = {
    SA: selectArea
}