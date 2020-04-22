// miniprogram/pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        viewOrderViewer: false,
        userPhone: '',
        userInfo: {
            status: "普通会员",
            integral: 0
        },
        user:[]
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
        // wx.request({
        //     url: 'http://localhost:3000/', //本地接口
        //     success(res) {
        //         that.setData({ // 此处that和this不是同一个人
        //             background: res.data.message.background,
        //             indexRecommend: res.data.message.indexRecommend
        //         })
        //     }
        // })
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

    viewOrder: function () {
        let that = this
        wx.navigateTo({
            url: `../oderDetail/orderDetail?phone=${that.data.userPhone}`
        })
    }

})