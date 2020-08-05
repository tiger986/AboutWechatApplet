const app = getApp();

Page({
  data: {
    submitted: false,
    subSucc: true,
    address: '请点击选择',
  },
  onReady(){
    this.staticData = {};
    this.staticData.type = 'buy';
  },
  bindChooseAddrTap(){
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          address: res.address
        });
        this.staticData.longitude = res.longitude;
        this.staticData.latitude = res.latitude;
        //console.log(res);
      }
    })
  },
  bindTypeChange(e){
    this.staticData.type = e.detail.value;
  },
  bindInfoInput(e){
    this.staticData.info = e.detail.value;
  },
  bindContactInput(e) {
    this.staticData.contact = e.detail.value;
  },
  bindSubmitTap(){
    if(!this.data.address){
      this.setData({
        subSucc: false
      });
    }
    if (!this.staticData.type){
      this.setData({
        subSucc: false
      });
    }
    if (!this.staticData.info){
      this.setData({
        subSucc: false
      });
    }
    if (!this.staticData.contact){
      this.setData({
        subSucc: false
      });
    }
    let submitData = {
      address: this.data.address,
      ...this.staticData
    }
    //console.log(submitData);
    // wx.request({
    //   method: 'POST',
    //   url: '',
    //   data: {},
    //   success: (res) => {
    //     this.setData({
    //       submitted: true
    //     });
    //   },
    //   fail: () => {
    //     this.setData({
    //       subSucc: false
    //     });
    //   }
    // })
    this.setData({
      submitted: true
    });
  },
  bindBackTap(e){
    //console.log(e.detail);
    wx.redirectTo({
      url: '/pages/publish/publish'
    });
  }
})