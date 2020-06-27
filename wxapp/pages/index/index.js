var app = getApp()
Page({
  data: {
    title: "bbb"
  },
  onLoad() {
    //console.log(app.globalData);
    app.globalFun();
    app.globalData = 'ppp';
    //console.log(app.globalData);
    //console.log(this.data.title);
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  handleClick() {
    this.setData({
      title: "eee"
    });
    console.log(this.text.aa);
    this.text.aa = 'bb';
    console.log(this.text.aa);
  },
  text: {
    aa: 'aa'
  },
  toAbout(){
    wx.redirectTo({
      //url: '../about/about'
      url: '../about/about?name=gao&age=18'
    })
  },
  toMy() {
    wx.navigateTo({
      //url: '../my/my'
      url: '../my/my?name=gao&age=18',
    })
  }
})
