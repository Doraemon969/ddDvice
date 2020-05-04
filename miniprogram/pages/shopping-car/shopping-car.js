// miniprogram/pages/shopping-car/shopping-car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userPhone: '',
        shoppingCarInfo: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that = this;
        wx.getStorage({
            key: 'userPhone',
            success(res) {
                that.setData({
                    userPhone: res.data
                })
                console.log('+++++success+++++成功++s+++success+++++', that.data.userPhone);
            },
            fail() {
                console.log('+++++error+++++失败+++++error+++++');
            }
        })
        setTimeout(() => {
            let userPhone = that.data.userPhone
            wx.request({
                url: 'http://localhost:3000/getShoppingCarInfo', //本地接口
                method: 'POST',
                data: {
                    userPhone: userPhone,
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success(res) {
                    that.setData({ // 此处that和this不是同一个人
                        shoppingCarInfo: res.data.data
                    })
                }
            })
        }, 1000);
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
     * 复选按钮监听
     */
    onChangeTap: function (e) {
        console.log(e.detail);
        console.log(e.detail.key);
    },

    /**
     * 路由跳转
     */
    navidateTo: function (e) {
        let index = e.currentTarget.dataset.index
        let tmpInfo = this.data.shoppingCarInfo[index].msg
        wx.navigateTo({
            url: `../oderConfirm/oderConfirm?name=${tmpInfo.name}&des=${tmpInfo.des}&price=${tmpInfo.price}&imgUrl=${tmpInfo.imgUrl}`
        })
    }
})