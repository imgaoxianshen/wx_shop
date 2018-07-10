import { Base } from "../../utils/util.js";
const base = new Base();
Page({

  data: {
    searchVal: "",
    isSearch: false,
    xuan: 0,//0不选中 1综合 2销量 3价格
    price_up: 0,//0不选1up2down
    toTopShow: false,
    history: [],
    goods: [],
    isFind: true
  },
  onLoad: function (options) {
    var that = this;
    let keyword = wx.getStorage({
      key: 'keyword',
      success: function (res) {
        that.setData({
          history: res.data.split(",")
        });
      },
    });
  },
  onPageScroll: function (e) {
    if (e.scrollTop > 150) {
      this.setData({
        toTopShow: true
      });
    } else {
      this.setData({
        toTopShow: false
      });
    }

  },
  OnSearchInput: function (e) {
    let inputValue = e.detail.value;
    this.setData({
      searchVal: inputValue
    });
    if (!inputValue) {
      this.setData({
        isSearch: false
      });
    }
  },
  clearChoose: function () {
    this.setData({
      searchVal: "",
      isSearch: false
    });
  },
  OnchangeTap: function (e) {
    let xuan = e.currentTarget.dataset.xuan;
    let price_up = 0;
    if (xuan == 3) {
      if (this.data.price_up == 0) {
        price_up = 1;
      } else if (this.data.price_up == 1) {
        price_up = 2;
      } else if (this.data.price_up == 2) {
        price_up = 1;
      }
      this.setData({
        price_up: price_up
      });
    }
    this.setData({
      xuan: xuan
    })
  },
  OnTopTap: function () {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  onSearchTap: function () {
    if (!this.data.searchVal) {
      return;
    }
    var that = this;
    let keyword = wx.getStorage({
      key: 'keyword',
      complete: function (res) {

        if (res.data) {
          var keyword = res.data.split(",");
        } else {
          var keyword = new Array();
        }

        if (keyword.indexOf(that.data.searchVal) == -1) {
          keyword.push(that.data.searchVal)
        }

        that.setData({
          history: keyword
        })

        wx.setStorage({
          key: 'keyword',
          data: keyword.join(),
        })
      }
    });

    this.setData({
      isSearch: true
    });

    base.wxRequest("search.php", {
      keyword: this.data.searchVal,
      type: "search"
    }, res => {
      this.setData({
        isFind: res.data.isFind,
        goods: res.data.goods
      })
    });

  },
  OndelHistoryTap: function () {
    this.setData({
      history: []
    });
    wx.removeStorage({
      key: 'keyword',
      success: function (res) {
      }
    });
    base.wxShowToast("清除历史搜索成功");
  },
  OnHistorySearchTap: function (e) {
    let keyword = e.currentTarget.dataset.keyword;
    base.wxRequest("search.php", {
      keyword: keyword,
      type: "search"
    }, res => {
      this.setData({
        isFind: res.data.isFind,
        goods: res.data.goods,
        isSearch: true,
        searchVal: keyword
      })
    });
  }

})