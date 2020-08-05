const app = getApp();

Page({
  data: {
    longitude: 0,
    latitude: 0,
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: app.getWindowInfo().windowWidth / 2 - 12,
        top: app.getWindowInfo().windowHeight / 2 -55,
        width: 22,
        height: 31
      },
      clickable: false
    },
    {
      id: 2,
      iconPath: '/resources/center.png',
      position: {
        left: 18,
        top: app.getWindowInfo().windowHeight - 110,
        width: 30,
        height: 30
      },
      clickable: true
    }],
    markers: []
  },
  onReady(){
    this.mapCtx = wx.createMapContext('map');
    //获取中心点
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        });
        this.getMes();
      }
    });
  },
  //返回中心点
  controltap(){
    this.mapCtx.moveToLocation();
  },
  //获取买卖信息
  getMes() {
    var arr = [{
      iconPath: '/resources/buy.png',
      id: 1,
      longitude: this.data.longitude + 0.01,
      latitude: this.data.latitude,
      width: 30,
      height: 30
    },
    {
      iconPath: '/resources/buy.png',
      id: 2,
      longitude: this.data.longitude - 0.008,
      latitude: this.data.latitude - 0.007,
      width: 30,
      height: 30
    },
    {
      iconPath: '/resources/sell.png',
      id: 3,
      longitude: this.data.longitude - 0.006,
      latitude: this.data.latitude + 0.008,
      width: 30,
      height: 30
    },
    {
      iconPath: '/resources/buy.png',
      id: 4,
      longitude: this.data.longitude + 0.006,
      latitude: this.data.latitude + 0.01,
      width: 30,
      height: 30
    },
    {
      iconPath: '/resources/sell.png',
      id: 5,
      longitude: this.data.longitude + 0.004,
      latitude: this.data.latitude - 0.008,
      width: 30,
      height: 30
    }];
    this.setData({
      markers: arr
    });
  },
  //点击markers
  markertap(e){
    //console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId,
    })
  }
})