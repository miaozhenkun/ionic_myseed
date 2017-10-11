/** 注释
*2017/10/11
*作者:miao
*功能: 文本域自适应高度(自定义指令)
 * demo:  <textarea [autoAreatext]="">
*/

import { Directive, ElementRef, HostListener,Input, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({ selector: '[autoAreatext]' })
export class AutoAreatextDirective {
  minHeight:string;
  @Input('autoAreatext') height: string;
  constructor(private el: ElementRef, private renderer: Renderer, public platform: Platform) {
    this.platform.ready().then(() => {
      this.minHeight = el.nativeElement.clientHeight;
    });
  }
  auto(){
    if(!this.minHeight){
      return false
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this.minHeight+'px');
    if(this.el.nativeElement.scrollHeight>this.minHeight){
      this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight+'px');
      this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'hidden');
    }
  }
  @HostListener('paste') onPaste() {
    this.auto();
  }
  @HostListener('cut') onCut() {
    this.auto();
  }
  @HostListener('keydown') onKeydown() {
    this.auto();
  }
  @HostListener('keyup') onKeyup() {
    this.auto();
  }
  @HostListener('focus') onFocus() {
    this.auto();
  }
  @HostListener('blur') onBlur() {
    this.auto();
  }
}
