// pages/project/todo/todo_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:0,
      device_id:"",
      device_name:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.record);
    var record=JSON.parse(options.record);
    this.setData({
      id:record.id,
      device_name:record.device_name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  applySubmit:function()
  {
    let that = this;
    wx.showModal({
        cancelColor:"cancelColor",
        title:"提示",
        content:"你真的要change吗",
        success:function(res){
          if(res.confirm)
          {
            var id = that.data.id;
            var device_name = that.data.device_name;
            var device_id = that.data.device_id;
            console.log(id);
            console.log(device_name);
            console.log(device_id);
            wx.request({
              url:'http://localhost:8080/wtqjsz092_war_exploded/device_file_servlet_action?action=modify_device_record',
              data:{"id":id , "device_name":device_name, "device_id" : device_id},
              header:{"content-type":"application/x-www-form-urlencoded","x-requested-with":"XMLHttpRequest",
              },
              success:function(res){
              //that.handleDeleteTodoRecordResult(res);
              wx.navigateBack({
              });
              },
              fail:function(res){
              }
            })
          }
            }
      })
  },
  inputTitle:function(e){
    this.setData({
      device_name:e.detail.value,
    });
  },
  inputId:function(e){
    this.setData({
      device_id:e.detail.value,
    });
  }
})