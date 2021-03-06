import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpMyNetService} from './HttpMyNetService';
@Injectable()
export class LookService {
  data: string;
  constructor(public http: Http, private httpMyNetService: HttpMyNetService) {

  }
  public getData() {
    return this.httpMyNetService.get('http://app.u17.com/v3/app/android/phone/rank/list?sortVersion=2', null).map(res => res.json());
  }
}
// 使用方法
// this.LookService.getData().subscribe(
//   data=>{
//     console.log(data.data);
//     console.log(data.data.message);
//     this.obj_CategorysListData=data.data.message;
//   }
// )
