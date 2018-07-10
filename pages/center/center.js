import { Base } from "../../utils/util.js";
const base = new Base();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false
  },

  onLoad: function (options) {

  },
  onGotUserInfo: function (e) {
    var that = this;
    wx.login({
      success: function (res) {
        console.log("res:" + res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          var js_code = res.code;
          base.wxRequest('http://localhost/xtwk888/xtshopApp/user_login.php', {
            act: 'yjj',
            js_code: js_code,
            encryptedData: e.detail.encryptedData,
            errMsg: e.detail.errMsg,
            iv: e.detail.iv,
            rawData: e.detail.rawData,
            signature: e.detail.signature,
            fromapp: 1
          }, res => {
            console.log(res);
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }, fail: function (e) {
        console.log(e)
      }
    })
  }
})