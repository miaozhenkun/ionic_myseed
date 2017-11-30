import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {NativeService} from "../../providers/NativeService";
declare var RongIMLib;
/**
 * @name echart 组件
 * @description  miao
 * @example   <chat [config]="" ></chat>
 */
@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
})
export class Chat{
  // @ViewChild('containerchart') container: ElementRef;
  // @Input() config:any;//此为 echart 组件的配置项
  // @Input() cheight:any;//设置  图表的高度
  // @Output() pwdResult = new EventEmitter<any>();
  conversationtype = RongIMLib.ConversationType.PRIVATE;
  instance;
  newmessage:string="";
  allmessages = [];
  constructor(private nativeService:NativeService) {

  }
  ngAfterContentInit(){
    let that=this;
    var appKey = "vnroth0kv456o";
    var token = "Ba7MIud4iRZGzmzAHQUclfE4hvy6LZ8N13eSPo7jHbhEQ6m4Inp7DNrxZ1vKXgCIJ1/9MKOM1sA=";
    var config = {
       //protobuf : "./protobuf-2.2.8.min.js"
      protobuf : "//cdn.ronghub.com/protobuf-2.2.8.min.js"
       //protobuf : "http(s)://cdn.ronghub.com/protobuf-2.2.8.min.js"
    };
    that.nativeService.showToast("开始初始化。。。。");
    RongIMLib.RongIMClient.init(appKey,null,{showError: true});
    let RongIMClient= RongIMLib.RongIMClient;
    this.instance = RongIMClient.getInstance();
    // 连接状态监听器
    RongIMClient.setConnectionStatusListener({
      onChanged: function (status) {
        console.log(status);
        switch (status) {
          case RongIMLib.ConnectionStatus.CONNECTED:
            break;
        }
      }
    });
    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: function (message) {
        console.log(message);
        // 判断消息类型
        switch(message.messageType){
          case RongIMClient.MessageType.TextMessage:
            // message.content.content => 消息内容
            that.allmessages.push({issend:false,con:message.content.content,ispic:false});
            break;
          case RongIMClient.MessageType.VoiceMessage:
            // 对声音进行预加载
            // message.content.content 格式为 AMR 格式的 base64 码
            break;
          case RongIMClient.MessageType.ImageMessage:
            // message.content.content => 图片缩略图 base64。
            // message.content.imageUri => 原图 URL。
            that.allmessages.push({issend:false,con:message.content.content,ispic:true});
            break;
          case RongIMClient.MessageType.DiscussionNotificationMessage:
            // message.content.extension => 讨论组中的人员。
            break;
          case RongIMClient.MessageType.LocationMessage:
            // message.content.latiude => 纬度。
            // message.content.longitude => 经度。
            // message.content.content => 位置图片 base64。
            break;
          case RongIMClient.MessageType.RichContentMessage:
            // message.content.content => 文本消息内容。
            // message.content.imageUri => 图片 base64。
            // message.content.url => 原图 URL。
            break;
        }

      }
    });
    //开始链接
    RongIMClient.connect(token, {
      onSuccess: function(userId) {
        //链接成功后 才可 发送消息
        that.nativeService.showToast("链接成功，用户id：" + userId);
        // console.log( "链接成功，用户id：" + userId);
      },
      onTokenIncorrect: function() {
        that.nativeService.showToast('token无效' );
        //console.log('token无效');
      },
      onError:function(errorCode){
        console.log(errorCode);
      }
    });
  }

  ngOnChanges(changes) {

  }
  send(){
    var content = {
      content:this.newmessage,
      extra:{
        "name":"苗",
        "age" : 12
      }
    };
    var conversationtype = RongIMLib.ConversationType.PRIVATE; // 私聊
    var msg = new RongIMLib.TextMessage(content);
    var targetId = "2";
    let that=this;
    this.instance.sendMessage(conversationtype, targetId, msg, {
      onSuccess: function (message) {
        console.log("发送文字消息成功");
        that.allmessages.push({issend:true,con:that.newmessage,ispic:false});
        that.newmessage="";
      },
      onError: function (errorCode,message){
        let info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default :
            info = '';
            break;
        }
        that.nativeService.showToast('发送失败:' + info);
      }
    });
  }

}
