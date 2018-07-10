// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      default:[1,2,3,4,5],
      buyNumber:1,
      buyNumMin:1,
      buyNumMax:0,
      img:"../../images/circle.png",
      not_select_img:"../../images/circle.png",
      select_img:"../../images/circle_g.png",
      isSelect:false,
      singleSelect:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  numJianTap: function() {
      if(this.data.buyNumber > this.data.buyNumMin){
          var currentNum = this.data.buyNumber;
          currentNum--;
          this.setData({
              buyNumber: currentNum
          })
      }
  },
  numJiaTap: function() {
      // if(this.data.buyNumber < this.data.buyNumMax){
      var currentNum = this.data.buyNumber;
      currentNum++ ;
      this.setData({
          buyNumber: currentNum
      })
      // }
  },
  select: function(options) {
    var src = options.currentTarget.dataset.src;
    var selectId = options.currentTarget.dataset.idx;
    
    if (src == this.data.not_select_img) {
      var img = this.data.select_img;
      var isSelect = true;
      var not_select_img = this.data.not_select_img;
      this.setData({
        img:img,
        elseimg: img,
        isSelect:isSelect,
        selectId:selectId
      })
      console.log(img);
      console.log(selectId);
    } 
    if (src == this.data.select_img) {
      var img = this.data.not_select_img;
      var isSelect = false;
      this.setData({
        img: img,
        elseimg: img,
        isSelect:isSelect,
        selectId: selectId
      })
      console.log(img);
      console.log(selectId);
    }
      // var that = this;
      // var selectId = options.currentTarget.dataset.select;
      // var singleSelect = this.data.singleSelect;
      // console.log(selectId);
      // console.log(singleSelect);
      // that.setData ({
      //     selectId:selectId
      // })
      /*if(singleSelect == false) {
          this.data.singleSelect = true;
          that.setData ({
              selectId:selectId
          })
      } else {
          this.data.singleSelect = false;
          that.setData ({
              selectId:''
          })
      }*/

      /*var that = this;
      var isSelect = options.currentTarget.dataset.select;
      console.log(isSelect);
      if(isSelect == false) {
        var img = that.data.select_img;
        var isSelect = true;
        that.setData ({
            img:img,
            isSelect:isSelect
        })
      } else {
          var img = that.data.not_select_img;
          var isSelect = false;
          that.setData ({
              img:img,
              isSelect:isSelect
          })
      }*/
  },
    allSelect: function(options) {
        var isSelect = options.currentTarget.dataset.select;
        console.log(isSelect);
        if(isSelect == false) {
            var img = this.data.select_img;
            var isSelect = true;
            this.setData ({
                all_img:img,
                img:img,
                isSelect:isSelect
            })
        } else {
            var img = this.data.not_select_img;
            var isSelect = false;
            this.setData ({
                all_img:img,
                img:img,
                isSelect:isSelect
            })
        }
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var img = this.data.img;
      var select_img = this.data.select_img;
      var isSelect = this.data.isSelect;
      this.setData({
          all_img:img,
          select_img:select_img,
          isSelect:isSelect
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var img = this.data.img;
      var select_img = this.data.select_img;
      var isSelect = this.data.isSelect;
      this.setData({
          all_img:img,
          select_img:select_img,
          isSelect:isSelect
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})