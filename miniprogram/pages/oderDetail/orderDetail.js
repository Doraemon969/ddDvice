// miniprogram/pages/oderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userDeviceInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let userPhone = options.phone
    wx.request({
      url: 'http://localhost:3000/minePhone', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        userPhone: userPhone
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          userDeviceInfo: res.data.message,
        })
        // 3.页面跳转
        console.log('================', );
        console.log(res.data.message);
        console.log('================', );
      },
      fail(res) {
        console.log("fail")
      }
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

  }
})