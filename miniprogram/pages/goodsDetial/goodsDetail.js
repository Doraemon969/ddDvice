// miniprogram/pages/goodsDetial/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/index-home-pic/banner1.jpg",
    msg: {},
    count: 1,
    userPhone: '',
    device: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      msg: options
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
   * 事件
   */
  toIndex: function() {
    wx.switchTab({
      url: `../index/index`
    })
  },
  toClassify: function() {
    wx.switchTab({
      url: `../category/category`
    })
  },
  toShoppingCar: function() {
    wx.switchTab({
      url: `../shopping-car/shopping-car`
    })
  },
  toMine: function() {
    wx.switchTab({
      url: `../mine/mine`
    })
  },


  /**
   * 加入购物车
   */
  addToCar: function() {
    let that = this
    // 0.验证设备是否已经重复
    if (this.data.count == 2) {
      wx.showToast({
        title: '已经添加到购物车，请勿重复添加',
        icon: 'none',
        duration: 1000
      })
      return
    }
    this.setData({
      count: 2
    })
    // 1.获取用户手机号
    wx.getStorage({
      key: 'userPhone',
      success(res) {
        that.setData({
          userPhone: res.data
        })
        // 2.向后端数据库添加购物车信息
        wx.request({
          url: 'http://localhost:3000/shoppingCar', //仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            userPhone: that.data.userPhone,
            device: that.data.msg.name,
            msg: that.data.msg
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            if (res.data.code == 200) {
              console.log("success", res.data)
              // 2.1提示添加成功
              wx.showToast({
                title: '加入购物车成功',
                icon: 'success',
                duration: 1000
              })
            }
          },
          fail(res) {
            console.log("fail")
            wx.showToast({
              title: '添加到购物车失败！',
              duration: 1000
            })
          }
        })
      }
    })
  }
})