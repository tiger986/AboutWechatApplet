//app.js
App({
  onLaunch(options) {
    //console.log(options);
  },
  onShow(options){
    //console.log(options);
  },
  onHide(){
    //console.log("onHide");
  },
  globalData: "globalData",
  globalFun(){
    this.globalData = "www";
    //console.log(this.globalData);
    //console.log("globalFun");
  }
})