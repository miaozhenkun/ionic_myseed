import {Component, Input, Output, EventEmitter, ElementRef, ViewChild,ChangeDetectorRef} from '@angular/core';
import {NativeService} from "../../providers/NativeService";
import {Device} from "@ionic-native/device";
import {appKey} from "../../providers/Constants";
import {Content, TextInput} from "ionic-angular";

declare var JMessage;
/**
 * @name chart 组件
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
  @ViewChild(Content) content: Content;
  newmessage:string="";
  allmessages = [];
  myInfo ;
  showEmojiPicker = false;
  @ViewChild('chat_input') messageInput: TextInput;
  constructor(private nativeService:NativeService,private device:Device,private cdRef: ChangeDetectorRef ) {

  }
  ngAfterContentInit(){
    let that=this;
    if(this.device.platform){
      JMessage.init({ isOpenMessageRoaming: true });
      JMessage.setDebugMode({ enable: true });//发布时设为false
      JMessage.login({'username': 'miao', 'password': '123456'},
        () => {
          alert("login ok");
          JMessage.getHistoryMessages({ type: 'single', username: 'miaokun',
              appKey: appKey, from: 0, limit: 20 },
            (msgArr) => { // 以参数形式返回消息对象数组
              // alert(msgArr);
              // do something.
              if( this.allmessages.length>0){
                this.allmessages.concat(msgArr);
              }else {
                this.allmessages=msgArr;
                this.allmessages.reverse();
              }
              that.cdRef.detectChanges();
              this.scrollToBottom();
              alert(this.allmessages[this.allmessages.length-1].target.username);
            }, (error) => {
              var code = error.code;
              var desc = error.description;
            })
        }, (error) => {
          alert("Login failed: " + error.description);
        });
      JMessage.getMyInfo((myInfo) => {
        if (myInfo.username != undefined) {
          this.myInfo=myInfo;
          alert(myInfo.username);
        }
      });

      var listener = function (msg) {
        // alert(msg.text);
        switch (msg.type){
          case 'text':
            //处理文字消息
            that.allmessages.push(msg);
            this.scrollToBottom();
            break;
          case 'image':
            //处理图片消息
            that.allmessages.push(msg);
            this.scrollToBottom();
            break;
          case 'voice':
            break;
          case 'custom':
            break;
          default:
            that.cdRef.detectChanges();
        }
        // that.allmessages.push(msg);

      }
      JMessage.addReceiveMessageListener(listener);
    }

  }
  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
  ngOnChanges(changes) {

  }
  ionViewLoaded(){
    let that=this;
    if(this.device.platform) {
      JMessage.init({isOpenMessageRoaming: true});
      JMessage.setDebugMode({enable: true});//发布时设为false
      JMessage.login({'username': 'miao', 'password': '123456'},
        () => {
          alert("login ok");
          JMessage.getHistoryMessages({
              type: 'single', username: 'miaokun',
              appKey: appKey, from: 0, limit: 20
            },
            (msgArr) => { // 以参数形式返回消息对象数组
              // alert(msgArr);
              // do something.
              if (this.allmessages.length > 0) {
                this.allmessages.concat(msgArr);
              } else {
                this.allmessages = msgArr;
              }
              that.cdRef.detectChanges();
              // alert(this.allmessages.length);
            }, (error) => {
              var code = error.code;
              var desc = error.description;
            })
        }, (error) => {
          alert("Login failed: " + error.description);
        });
    }
  }
 send(){
    //username 为目标名字     发送时将username  存入target 对象
   let that=this;
   JMessage.sendTextMessage({ type: 'single', username: 'miaokun', appKey: appKey,
       text: this.newmessage, extras: {key1: 'value1'}, messageSendingOptions: JMessage.messageSendingOptions },
     (msg) => {

       that.allmessages.push({ type: 'single',  text: this.newmessage,from:that.myInfo,thumbPath:null,target:{username:"miaokun"}});
       this.newmessage="";
      alert('发送成功');
     }, (error) => {
       alert(error.description);
       // var code = error.code
       // var desc = error.description
     })
 }
  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.content.resize();
    this.scrollToBottom();
  }



}
