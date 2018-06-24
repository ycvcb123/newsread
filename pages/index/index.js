Page({
    onTap: function() {
        //有返回按钮 （最多5级）
        // wx.navigateTo({
        //     url: '../posts/posts',
        // })
        //无返回按钮
        wx.redirectTo({
            url: '../posts/posts',
        })
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
        console.log('page is onhide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log('page is onunload')
    }
})