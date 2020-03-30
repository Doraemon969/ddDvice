// miniprogram/pages/oderConfirm/oderConfirm.js
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk');
// 实例化API核心类
var qqmapsdk = new QQMapWX({key: 'MGRBZ-PPECW-ENYR3-OMNA6-F4C4V-LIFJ5'});





Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    dataStartPick: '',
    dataEndPick: '',
    currentDate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 自动获取当前位置，并逆解析为地名
     */
    var _this = this;
    qqmapsdk.reverseGeocoder({
      location: '',
      success: function (res) {
        console.log(res);
        var res = res.result; // 过滤res
        var mks = [];
        mks.push({ // 获取返回结果，放到mks数组中
          title: res.address
        });
        _this.setData({ //设置markers属性和地图位置poi，将结果在地图展示
          markers: mks,
          poi: {
            latitude: res.location.lat,
            longitude: res.location.lng
          }
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    })

    /* 对Date的扩展，将 Date 转化为指定格式的String 
     * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
     * 可以用 1-2 个占位符 
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
     * eg: 
     * (new Date()).format("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
     * (new Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
     * (new Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
     * (new Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
     * (new Date()).format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
     */
    Date.prototype.format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return fmt;
    };
    this.setData({
      currentDate: (new Date()).format("yyyy-MM-dd")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 导航事件
   */
  toIndex: function () {
    wx.switchTab({
      url: `../index/index`
    })
  },
  toClassify: function () {
    wx.switchTab({
      url: `../category/category`
    })
  },
  toShoppingCar: function () {
    wx.switchTab({
      url: `../shopping-car/shopping-car`
    })
  },
  toMine: function () {
    wx.switchTab({
      url: `../mine/mine`
    })
  },

  /**
   * 选择日期范围
   */
  dataStartPick: function(e) {
    this.setData({
      dataStartPick: e.detail.value
    })
    console.log("+++++++++++++", e.detail)
  },
  dataEndPick: function (e) {
    this.setData({
      dataEndPick: e.detail.value
    })
  }


})