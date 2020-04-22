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
    freight: '128',
    location: {},
    dataStartPick: '',
    dataEndPick: '',
    dayRange: '',
    currentDate: '',
    count: '1',
    note: '',
    num: '',
    total: '',
    userPhone: '',
    msg: {}
  },

  computed: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'userPhone',
      success(res) {
        that.setData({
          userPhone: res.data
        })
        console.log('=======++++++++++++++++++=========+++++++++++++++++', );
        console.log("userPhone", that.data.userPhone);
        console.log('=======++++++++++++++++++=========+++++++++++++++++', );
      }
    })
    this.setData({
      msg: options // options是一个对象
    })
    setInterval(() => {
      this.num_data()
      this.setData({
        total: this.getTotal()
      })
    }, 500);
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
          },
          location: res.location
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
  },

  /**
   * 日期范围
   */
  num_data: function (e) {
      let that = this;
      var start = that.data.dataStartPick || this.data.currentDate;
      var end = that.data.dataEndPick || this.data.currentDate;
      var start_date = new Date(start.replace(/-/g, "/"));
      var end_date = new Date(end.replace(/-/g, "/"));
      var days = end_date.getTime() - start_date.getTime();
      var day = parseInt(days / (1000 * 60 * 60 * 24));
      if (day > 0) {
        that.setData({
          num: day
        })
      } 
  },

  /**
   * 计数器数量获取
   */
  numCounter: function (e) {
    this.setData({
      count: e.detail.count
    })
  },

  /**
   * 设置备注信息
   */
  getText: function(e){
    this.setData({
      note: e.detail.value
    })
  },
  
  /**
   * 设置用户手机号
   */
  getPhone: function(e){
    this.setData({
      userPhone: e.detail.value
    })
  },

  /**
   * 提交信息
   */
  submmit: function(){
    // 1.微信支付，成功
    let flag = true
    if (flag) {
      // 2.向后端发送数据
      let tmp = {
       totalPrice: this.getTotal(),
       note: this.data.note,
       userPhone: this.data.userPhone,
       timeStart: this.data.dataStartPick,
       timeEnd: this.data.dataEndPick,
       timeRange: this.data.dayRange,
       local: this.data.location,
       device: this.data.msg,
       count: this.data.count,
      }
      wx.request({
        url: 'http://localhost:3000/addUserInfo', //仅为示例，并非真实的接口地址
        method: 'POST',
        data: tmp,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log("success", res.data)
          // 3.数据插入成功，弹出提示页面跳转到我的
          wx.showToast({
            title: '提交成功！',
            icon: 'success',
            duration: 1000
          })
          setTimeout(() => {
            wx.switchTab({
              url: `../mine/mine`
            })
          }, 1500);
        },
        fail(res) {
          console.log("fail")
          wx.showToast({
            title: '提交失败！',
            duration: 1000
          })
        }
      })
    }
  },

  /**
   * 计算总金额
   */
  getTotal: function(){
    let price = parseFloat(this.data.msg.price); // 单价
    let count = parseFloat(this.data.count); // 数量
    let num = this.data.num || 0; // 天数
    let freight = parseFloat(this.data.freight); // 运费
    let total = (price * count * num) + (freight) // 总价计算
    return total.toFixed(2) // 保留两位小数
  }

})

