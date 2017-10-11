/** 注释
*2017/10/11
*作者:miao
*功能: 默认空值过滤器
*/
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'defaultValue',
})
export class DefaultValuePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if(value==null||value==""){
      return '未填写';
    }else {
      return value;
    }
  }
}
