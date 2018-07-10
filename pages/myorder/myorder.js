// pages/myorder/myorder.js
var app =getApp();
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
   data: {
        winWidth: 0,   
    // tab切换  
    currentTab: 0,
     orderInfo:[],
     uid:'',
     pages:1,
     scrollHeight:0,
   },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
     var that = this;
         wx.getSystemInfo({
        success:function(res){
            that.setData({
                scrollHeight:res.windowHeight
            });
        }
    });
     
 },
 /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { 
      currentTab: e.detail.current,
       });  
   
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( that.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current ,
      }); 
    
    }  
  },  
 payagain:function(e){
  var orderid = e.currentTarget.dataset.orderid;
  var price = e.currentTarget.dataset.price;
  console.log(price);
  wx.navigateTo({
    url: '../confirmPay/confirmPay?order_from=2&orderid='+orderid+'&price='+price,
  });
},
evaluate:function(e){
  var doctor_memid = e.currentTarget.dataset.doctor_memid;
  var orderid = e.currentTarget.dataset.orderid;
  wx.navigateTo({
    url: '../evaluate/evaluate?doc_id='+doctor_memid+'&orderid='+orderid,
  });
},
more:function(){
 var pages =this.data.pages;
 pages++;
  

},
   morecallBack:function(res){
     // console.log(res);
    if(res.data.error==0){
      var that = this;
      var order=that.data.orderInfo;   
      if(res.data.xt.list==""){
        that.setData({
        prompt:'我也是有底线的'
      })    
      }
      that.setData({
        orderInfo:order.concat(res.data.xt.list), 
         pages:that.data.pages+1,
      })    
      
    }
   

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