// miniprogram/pages/goodsDetial/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/index-home-pic/banner1.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  }
})