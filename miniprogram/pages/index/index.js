var app = getApp()
Page({
  data: {
    background: [
      '../../images/index-home-pic/banner1.jpg',
      '../../images/index-home-pic/banner2.jpg',
      '../../images/index-home-pic/banner3.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indexRecommend: [{
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备1厂家直销，便宜实惠又好用！赶紧来租吧！",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备2",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备3",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备4",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备5",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备6",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备7",
        price: 0.01
      },
      {
        imgUrl: "../../images/index-home-pic/banner1.jpg",
        description: "设备8",
        price: 0.01
      },
    ]
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

})



// //index.js
// const app = getApp()

// Page({
//   data: {
//     avatarUrl: './user-unlogin.png',
//     userInfo: {},
//     logged: false,
//     takeSession: false,
//     requestResult: '',
//     name: "卞瑞江",
//     age: 24
//   },

//   onLoad: function () {
//     console.log("载入成功！")
//     if (!wx.cloud) {
//       wx.redirectTo({
//         url: '../chooseLib/chooseLib',
//       })
//       return
//     }

//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               this.setData({
//                 avatarUrl: res.userInfo.avatarUrl,
//                 userInfo: res.userInfo
//               })
//             }
//           })
//         }
//       }
//     })
//   },

//   onGetUserInfo: function (e) {
//     if (!this.data.logged && e.detail.userInfo) {
//       this.setData({
//         logged: true,
//         avatarUrl: e.detail.userInfo.avatarUrl,
//         userInfo: e.detail.userInfo
//       })
//     }
//   },

//   onGetOpenid: function () {
//     // 调用云函数
//     wx.cloud.callFunction({
//       name: 'login',
//       data: {},
//       success: res => {
//         console.log('[云函数] [login] user openid: ', res.result.openid)
//         app.globalData.openid = res.result.openid
//         wx.navigateTo({
//           url: '../userConsole/userConsole',
//         })
//       },
//       fail: err => {
//         console.error('[云函数] [login] 调用失败', err)
//         wx.navigateTo({
//           url: '../deployFunctions/deployFunctions',
//         })
//       }
//     })
//   },

//   // 上传图片
//   doUpload: function () {
//     // 选择图片
//     wx.chooseImage({
//       count: 1,
//       sizeType: ['compressed'],
//       sourceType: ['album', 'camera'],
//       success: function (res) {

//         wx.showLoading({
//           title: '上传中',
//         })

//         const filePath = res.tempFilePaths[0]

//         // 上传图片
//         const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
//         wx.cloud.uploadFile({
//           cloudPath,
//           filePath,
//           success: res => {
//             console.log('[上传文件] 成功：', res)

//             app.globalData.fileID = res.fileID
//             app.globalData.cloudPath = cloudPath
//             app.globalData.imagePath = filePath

//             wx.navigateTo({
//               url: '../storageConsole/storageConsole'
//             })
//           },
//           fail: e => {
//             console.error('[上传文件] 失败：', e)
//             wx.showToast({
//               icon: 'none',
//               title: '上传失败',
//             })
//           },
//           complete: () => {
//             wx.hideLoading()
//           }
//         })

//       },
//       fail: e => {
//         console.error(e)
//       }
//     })
//   },

//   click: function () {
//     this.setData({
//       name: "川普",
//       age: 50
//     })
//   }

// })