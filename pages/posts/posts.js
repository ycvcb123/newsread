var post_contents = require("../../data/posts_data.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    postTip: function(e) {
        var postid = e.currentTarget.dataset.postid;
        wx.navigateTo({
            url: './posts-detail/posts-detail?id=' + postid,
        })
    },
    onSwiperTap: function(e) {
        var postid = e.target.dataset.postid;
        wx.navigateTo({
            url: './posts-detail/posts-detail?id=' + postid,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            post_contents: post_contents.post_contents
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        //console.log('onready');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        //console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        //console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        //console.log('onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
       // console.log('onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        //console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
       // console.log('onShareAppMessage');
    }
})