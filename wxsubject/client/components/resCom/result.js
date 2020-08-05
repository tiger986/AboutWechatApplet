// components/resCom/resCom.js
Component({
  //组件的属性列表
  properties: {
    submitted: Boolean
  },

  //组件的初始数据
  data: {
    btnText: '返回'
  },

  //组件的方法列表
  methods: {
    bindBackTap(){
      //this.triggerEvent('back', {id:2, num:3});
      this.triggerEvent('back');
    }
  },

  //生命周期函数，当组件实例载入页面节点时触发
  attached(){

  },
  options: {
    multipleSlots: true  //启用多slot支持
  }
})
