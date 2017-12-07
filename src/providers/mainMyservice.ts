import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpMyNetService} from './HttpMyNetService';
@Injectable()
export class MainMyService {
  data: string;
  constructor(public http: Http, private httpMyNetService: HttpMyNetService) {

  }
  public getData() {
    return this.httpMyNetService.get('http://app.u17.com/v3/app/android/phone/rank/list?sortVersion=2', null).map(res => res.json());
  }
  //登录
  public login(params) {
    return this.httpMyNetService.get('/pub/login', params).map(res => res.json());
  }
  //获取员工列表
  public getStaffList(params) {
    return this.httpMyNetService.get('/base/staff/list', params).map(res => res.json());
  }
  //获取用户头像
  public getAvatar(){
    return this.httpMyNetService.get('/system/user/getAvatar').map(res => res.json());
  }
  // 更新用户头像
  public updateAvatar(params){
    return this.httpMyNetService.post('/system/user/updateAvatar',params).map(res=>res.json());
  }
}
