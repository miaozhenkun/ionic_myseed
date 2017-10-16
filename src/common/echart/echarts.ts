import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
declare var echarts;
/**
 * @name echart 组件
 * @description  miao
 * @example   <echarts [config]="" [cheight]=""></echarts>
 */
@Component({
  selector: 'echarts',
  templateUrl: 'echarts.html',
})
export class Echart   {
  @ViewChild('containerchart') container: ElementRef;
  @Input() config:any;//此为 echart 组件的配置项
  @Input() cheight:any;//设置  图表的高度
  @Output() pwdResult = new EventEmitter<any>();
  defaltOption;
  chart: any;
  constructor() {
    this.defaltOption = {
      baseOption: {
        toolbox: {
          show: false, // 是否显示工具栏
          feature: {
            dataView: {
              readOnly: true // 数据只读
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        }
      }
    };
  }
  ionViewDidEnter(){

  }
  ngOnChanges(changes) {
      this.refresh();
  }
  ngAfterContentInit() {
      this.refresh();
  }
  refresh(){
    let ctx = this.container.nativeElement;
    if(this.cheight){
      ctx.style.height=this.cheight+'px';
    }
    this.chart = echarts.init(ctx);
    this.chart.setOption(this.config);
  }
}
