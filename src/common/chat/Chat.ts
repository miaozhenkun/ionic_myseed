import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {NativeService} from "../../providers/NativeService";
import {Device} from "@ionic-native/device";

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
  instance;
  newmessage:string="";
  allmessages = [];
  constructor(private nativeService:NativeService,private device:Device ) {

  }
  ngAfterContentInit(){
    let that=this;
    if(this.device.platform){
      JMessage.init({ isOpenMessageRoaming: true });
      JMessage.setDebugMode({ enable: true });//发布时设为false
      JMessage.login({'username': 'miao', 'password': '123456'},
        () => {
          alert("login ok");
        }, (error) => {
          alert("Login failed: " + error.description);
        });
      JMessage.getMyInfo((myInfo) => {
        if (myInfo.username != undefined) {
          alert(myInfo.username);
        }
      });
      var listener = function (msg) {
        alert(msg);
        that.allmessages.push({issend:false,con:msg.text,ispic:false});
      }
      JMessage.addReceiveMessageListener(listener);
    }

  }

  ngOnChanges(changes) {

  }
 send(){
   JMessage.sendTextMessage({ type: 'single', username: 'username', appKey: 'appKey',
       text: 'hello world', extras: {key1: 'value1'}, messageSendingOptions: JMessage.messageSendingOptions },
     (msg) => {
       // do something.

     }, (error) => {
       var code = error.code
       var desc = error.description
     })
 }

}
