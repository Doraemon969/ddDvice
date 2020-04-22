var app = getApp()
Page({
  data: {
    viewOrderViewer: false,
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    avatarUrl: '',
    userInfo: '',
    indexRecommend: [],
    userPhone: ''
  },

  /**
   * 生命周期函数，onLoad
   */
  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://localhost:3000/indexRecommend', //本地接口
      success(res) {
        that.setData({ // 此处that和this不是同一个人
          background: ["http://q8u6weytm.bkt.clouddn.com/images/index/banner/banner1.jpg", "http://q8u6weytm.bkt.clouddn.com/images/index/banner/banner2.jpg", "http://q8u6weytm.bkt.clouddn.com/images/index/banner/banner3.jpg"],
          indexRecommend: res.data.message[0].subDevice
        })
        console.log('================', );
        console.log(res.data.message[0].subDevice);
        console.log('================', );
      },
      fail(res) {
        console.log('+++++error+++++api数据请求失败+++++error+++++');
      }
    })
    // 获取用户本地手机号
    wx.getStorage({
      key: 'userPhone',
      success(res) {
        that.setData({
          userPhone: res.data
        })
        console.log('================', );
        console.log(res.data);
        console.log('================', );
      },
      fail(){
        that.setData({
          viewOrderViewer: true
        })
      }
    })
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper',
    }
  },

  /**
   * 用户点击获取信息
   */
  viewOrder: function () {
      console.log('================', );
      console.log("viewOrderViewer: true");
      console.log('================', );
      this.setData({
        viewOrderViewer: true
      })
    },

    viewOrderPhone(e) {
      this.setData({
        userPhone: e.detail.value
      })
    },
    submmit(e) {
      if (this.data.userPhone.length == 11) {
        // 1存入本地
        wx.setStorage({
          key: "userPhone",
          data: this.data.userPhone,
          success(){
            wx.showToast({
              title: '获取成功！',
              duration: 1000
            })
          }
        })
        // 2隐藏弹框
        this.setData({
          viewOrderViewer: false
        })
      } else if (this.data.userPhone.length != 11) {
        wx.showToast({
          title: '请输入13位手机号码',
          icon: 'none',
          duration: 1000
        })
      }
      
    },
    cancel() {
      this.setData({
        viewOrderViewer: false
      })
    }
})


