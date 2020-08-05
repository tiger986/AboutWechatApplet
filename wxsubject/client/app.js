//app.js
App({
  getWindowInfo(){
    try{
      var res = wx.getSystemInfoSync();
      return res;
    }catch(e){
      console.log(e);
    }
  }
})