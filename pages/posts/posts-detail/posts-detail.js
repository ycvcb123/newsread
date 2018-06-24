var postDatas = require("../../../data/posts_data.js");
//获取全局对象实例
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        music: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var postId = options.id;
        var postsList = postDatas.post_contents;
        var postSelect = postsList.map(v => {
            if (v.post_id === postId) {
                return v;
            }
        })
        postSelect.map(v => {
            if(v){
                this.setData({
                    post_details: v,
                    postId: postId
                });
            }
        })
        // this.setData({
        //     post_details: postSelect[0] ? postSelect[0] : postSelect[1],
        //     postId: postId
        // });

        var postsCollected = wx.getStorageSync("postsCollected") || {};
        if (JSON.stringify(postsCollected) !== "{}") {
            this.setData({
                collected: postsCollected[postId] || false
            })
        } else {
            postsCollected[postId] = false;
            wx.setStorageSync("postsCollected", postsCollected);
        }
        //监听音乐播放
        var that = this;
        wx.onBackgroundAudioPlay(function(){
            that.setData({
                music: true
            })
            app.globalData.g_music = true;
        })
        wx.onBackgroundAudioPause(function(){
            that.setData({
                music: false
            })
            app.globalData.g_music = false;
        })

        this.setData({
            music: app.globalData.g_music
        })
        if(app.globalData.g_music === true){
            wx.playBackgroundAudio({
                dataUrl: this.data.post_details.musicSrc,
                title: this.data.post_details.musicTitle
            })
        }else if(app.globalData.g_music === false){
            wx.pauseBackgroundAudio()
        }
    },
    collectTap: function(event) {
        var postsCollected = wx.getStorageSync("postsCollected") || {};
        var postId = this.data.postId;
        postsCollected[postId] = !postsCollected[postId];
        wx.setStorageSync("postsCollected", postsCollected);
        this.setData({
            collected: postsCollected[postId]
        })
        wx.showToast({
            title: postsCollected[postId] ? '收藏成功' : '取消收藏',
            duration: 1000,
            icon: postsCollected[postId] ? 'success' : 'none'
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onShareTap: function(e) {
        var itemList = [
            "分享到朋友圈",
            "分享给微信好友",
            "分享到QQ空间",
            "分享给QQ好友"
        ]
        wx.showActionSheet({
            itemList: itemList,
            itemColor: "#ff6632",
            success: function(res) {
                wx.showModal({
                    title: '分享文章',
                    content: '把文章' + itemList[res.tapIndex]
                })
            }
        })
    },
    onMusicTap: function(e) {
        // var music = !this.data.music;
        app.globalData.g_music = !app.globalData.g_music;
        this.setData({
            music: app.globalData.g_music
        })
        if(app.globalData.g_music === true){
            wx.playBackgroundAudio({
                dataUrl: 'http://up.mcyt.net/?down/47870.mp3',
                title: '我愿意--张国荣'
            })
        }else if(app.globalData.g_music === false){
            wx.pauseBackgroundAudio()
        }
    },
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})