// miniprogram/pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category: []
    },

    click: function (e) {
        console.log(e.detail);
        console.log(this.data.category);
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 请求数据
        let that = this
        wx.request({
            url: 'http://localhost:3000/deviceInit', //本地接口
            success(res) {
                that.setData({ // 此处that和this不是同一个人
                    category: res.data.message
                })
            }
        })
    },

    methods: {
        
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
        console.log("this.category", this.data.category);
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
})