var app = getApp();
Page({
  data: {
    tplData:{
      msg: '字母',
      arr: ['aa', 'bb', 'cc', 'dd']
    }
  },
  toIndex() {
    wx.reLaunch({
      //url: '/pages/index/index',
      url: '../index/index',
    })
  }
})