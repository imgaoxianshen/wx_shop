// pages/aftersale/aftersale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    m_items:[ 
      { name: '退货退款', value: '退货退款', checked: 'true' },
      { name: '换货', value: '换货' },
      { name: '退款（仅退货不退款）', value: '退款（仅退货不退款）' },
    ],
    c_items: [
      { name: '不想要了', value: '不想要了', checked: 'true'  },
      { name: '卖家缺货', value: '卖家缺货' },
      { name: '拍错了/订单信息错误', value: '拍错了/订单信息错误' },
      { name: '其他', value: '其他' },
    ],
    m_hidden:true,
    c_hidden:true,
    zhe_hidden:true,
    src:"../../images/default_upload.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  method:function(){
      this.setData({
        m_hidden:false,
        zhe_hidden:false
      })
  },

  cause: function () {
    this.setData({
      c_hidden: false,
      zhe_hidden: false
    })
  },

  m_radioChange:function(options) {
    var m_value = options.currentTarget.dataset.m_value;
    console.log(m_value);
    this.setData({
      m_hidden: true,
      zhe_hidden:true,
      m_value:m_value
    })
  },

  c_radioChange: function (options) {
    var c_value = options.currentTarget.dataset.c_value;
    console.log(c_value);
    this.setData({
      c_hidden: true,
      zhe_hidden: true,
      c_value: c_value
    })
  },

  zhezhao:function() {
    this.setData({
      zhe_hidden: true,
      m_hidden: true,
      c_hidden: true
    })
  },

  upload: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.img('album')
          } else if (res.tapIndex == 1) {
            that.img('camera')
          }
        }
      }
    })
  },

  img: function () {
    var that = this;
    wx.chooseImage({

      count: 1, //最多可以选择的图片数，默认为1

      sizeType: ['orignal', 'compressed'], //original 原图，compressed 压缩图，默认二者都有

      sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有

      success: function (res) {        //成功则返回图片的本地文件路径列表 tempFilePaths

        var tempFilePaths = res.tempFilePaths;
        console.log(res);
        that.setData({
          src: tempFilePaths[0]
        })
        var formData = {
          uid: app.globalData.uid
        }
        wx.uploadFile({
          url: Config.ApiHost + 'uploader.php?act=upload',
          filePath: that.data.src,
          name: 'file',
          formData: formData, // HTTP 请求中其他额外的 form data
          success: function (res) {
            var fres = JSON.parse(res.data);
            if (fres.error == 0) {
              that.setData({
                fpath: fres.url
              })
            } else {
              wx.showToast({
                title: fres.xt.message,
                duration: 2000
              });
            }
          },
          fail: function (res) {
            typeof fail == "function" && fail(res);
          }
        })
      },

      fail: function () { }, //接口调用失败的回调函数

      complete: function () { } //接口调用结束的回调函数（调用成功、失败都会执行）
    })
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