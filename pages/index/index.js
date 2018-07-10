import { Base } from "../../utils/util.js";
const base = new Base();
//获取应用实例
const app = getApp()

Page({
  data: {
    category_list: [],
    //选中的二级分类
    chooseList: [],
    //选中的id
    selectedID: 1,
    //二级分类id
    selectedTwoID: 0,
    showCategory: false,
    showDetail: false,
    //下拉动画效果
    animationData: {},
    banner: [],
    catrgory_isrecommand: [],
    zhuanti: [],
    good_recommand: [],
    notice: []
  },

  onLoad: function () {
    base.wxRequest("index.php", {}, res => {
      if (res.code == 0) {
        this.setData({
          banner: res.data.banner,
          catrgory_isrecommand: res.data.catrgory_isrecommand,
          zhuanti: res.data.zhuanti,
          good_recommand: res.data.good_recommand,
          category_list: res.data.catrgory_list,
          notice: res.data.notice
        })
      }
    });
  },
  OnCategoryChooseTap: function (e) {

    let id = e.currentTarget.dataset.id;

    this.setData({
      selectedID: id,
      showCategory: false,
    });

    //先置空
    this.setData({
      chooseList: []
    });
    //将这个id的二级分类存入数组
    for (let val in this.data.category_list) {
      if (this.data.category_list[val].id == id) {
        if (this.data.category_list[val].category_three) {
          this.setData({
            chooseList: this.data.category_list[val].category_three
          });
        }
      }
    }

    // 显示别的详情
    if (id != -1) {
      this.setData({
        showDetail: true
      });
    } else {
      this.setData({
        showDetail: false
      });
    }

    //箭头动画
    if (e.currentTarget.dataset.type = "catrgory") {
      let animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      });
      animation.rotate(0).step()
      this.setData({
        animationData: animation.export()
      })
    }


    //跳到页面顶部
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    });

  },
  OnCategoryChooseTwoTap: function (e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      selectedTwoID: id,
      showCategory: false
    });
  },
  OnShowCatrgoryTap: function () {
    this.setData({
      showCategory: !this.data.showCategory
    });
    //箭頭的動畫效果
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    if (!this.data.showCategory) {
      animation.rotate(0).step()
      this.setData({
        animationData: animation.export()
      })
    } else {
      animation.rotate(180).step()
      this.setData({
        animationData: animation.export()
      })

    }
  },
  OnArticleTap: function () {
    wx.navigateTo({
      url: '../article/article',
    })
  },
  OnZhuanTiTap: function () {
    wx.navigateTo({
      url: '../zhuanti/zhuanti',
    })
  },
  OnSearchTap: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  OnArticleListTap: function () {
    wx.navigateTo({
      url: '../article-list/article-list',
    })
  }
})
