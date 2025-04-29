// pages/project/todo/todo_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      device_id:"",
      device_name:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  applySubmit:function(){
    var device_name =  this.data.device_name;
    var device_id =  this.data.device_id;
    wx.request({
      url:'http://localhost:8080/wtqjsz092_war_exploded/device_file_servlet_action?action=add_device_record',
      data:{"device_name":device_name, "device_id" : device_id},
      header:{"content-type":"application/x-www-form-urlencoded","x-requested-with":"XMLHttpRequest",
      },
      success:function(res){
      //that.handleAddTodoRecordResult(res);
      wx.navigateBack({
      });
      },
      fail:function(res){
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