import { Pipe, PipeTransform } from '@angular/core';
import {GLOBAL_DICSMAP} from '../../providers/Constants'
/** 注释
*2017/10/10
*作者:miao
*功能:    类似angular.js   过滤器功能                用法      {{gener|dicTrans:'GENDER'}}
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dicTrans',
})
export class DicTransPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   nullValue = "";
  GLOBAL_DICSMAP=GLOBAL_DICSMAP;
  transform(value: string, ...args) {
    return this.getDescByCode(value,args);
  }
  // 根据编码获取描述
  getDescByCode(type, code){
    if(type === undefined || code === undefined){
      return this.nullValue;
    }
    let codeMap = this.GLOBAL_DICSMAP[code];
    return codeMap ? codeMap[type] : this.nullValue;
  }


}
