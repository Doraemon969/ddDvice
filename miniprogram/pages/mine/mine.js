// miniprogram/pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            name: "卞瑞江",
            imgUrl: "../../images/mine-pic/mine.jpg",
            status: "普通会员",
            integral: 0
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        wx.request({
            url: 'http://localhost:3000/home', //本地接口
            success(res) {
                that.setData({ // 此处that和this不是同一个人
                    background: res.data.message.background,
                    indexRecommend: res.data.message.indexRecommend
                })
            }
        })

        wx.getUserInfo({
            success: function (res) {
                var userInfo = res.userInfo
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var gender = userInfo.gender //性别 0：未知、1：男、2：女
                var province = userInfo.province
                var city = userInfo.city
                var country = userInfo.country
                console.log('====================================');
                console.log(userInfo, nickName, avatarUrl, gender, province, city, country);
                console.log('====================================');
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