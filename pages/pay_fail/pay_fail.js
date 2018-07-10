// pages/pay_fail/pay_fail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime: 7200,
    fen:"0分",
    miao:"0秒"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
  that.getCode();
  },
  getCode: function (options) {
    console.log(123)
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          fen: '0分',
          miao: '0秒'
        })
      }else{
        var fen = parseInt(currentTime / 60)
        var miao = currentTime - fen * 60
        that.setData({
          fen: fen + '分钟',
          miao: miao + '秒'
        })
      }
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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