class Base {
  baseUrl = "http://localhost/xtwk888/xtshopApp/";

  wxShowToast(title, icon = "none") {
    wx.showToast({
      title: title,
      icon: icon
    })
  }
  wxRequest(url, data, callBack) {
    wx.request({
      url: this.baseUrl+url,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        callBack(res.data)
      }
    })
  }

}
export { Base }
