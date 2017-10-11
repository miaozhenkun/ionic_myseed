import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
declare var echarts;
/**
 * @name echart 组件
 * @description  miaokun
 * @example   <echarts [config]="" ></echarts>
 */
@Component({
  selector: 'echarts',
  templateUrl: 'echarts.html',
})
export class Echart   {
  @ViewChild('containerchart') container: ElementRef;
  @Input() config:any;//此为 echart 组件的配置项
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
    if(changes.config){
      this.refresh();
    }
  }
  ngAfterContentInit() {
      this.refresh();
  }
  refresh(){
    console.log(this.config);
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    // let allConfig = {};
    // angular.extend(allConfig, this.defaltOption, {baseOption: this.config});
    this.chart.setOption(this.config);
  }
}
