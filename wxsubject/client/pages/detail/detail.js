// pages/deital/deital.js
Page({
  data: {
    detailInfo: {}
  },
  onLoad: function (options) {
    //console.log(options);
    if(options.id == 1){
      this.setData({
        detailInfo: {
          address: '北京市海淀区宝盛里',
          type: 1,
          info: '求购一条胖头金鱼，最好是红色的。',
          tel: '15829709328'
        }
      });
    }
    if (options.id == 2) {
      this.setData({
        detailInfo: {
          address: '北京市朝阳区盛世家园',
          type: 1,
          info: '求购喵星人一只，白色，身体健康，性格温顺。',
          tel: '13728938607'
        }
      });
    }
    if (options.id == 3) {
      this.setData({
        detailInfo: {
          address: '北京市东城区怡清园',
          type: 2,
          info: '出售白色小鹦鹉一对，聪明伶俐，外形漂亮。',
          tel: '18928756902'
        }
      });
    }
    if (options.id == 4) {
      this.setData({
        detailInfo: {
          address: '北京市丰台区天心苑',
          type: 1,
          info: '求购红木太师椅一把，完好无损，做工精细。',
          tel: '14783905297'
        }
      });
    }
    if (options.id == 5) {
      this.setData({
        detailInfo: {
          address: '北京市海淀区小营东路',
          type: 2,
          info: '出售mac笔记本一台，9成新，性能好。',
          tel: '15189274896'
        }
      });
    }
  }
})