import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
declare var echarts;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  @ViewChild('container') container: ElementRef;
  chart: any;

  gener;
  purName;
  config;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){
    this.gener='01';
    this.purName=null;
    this.config={a:12,b:23};
  }
  ionViewDidEnter() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: '100%',
        height: '100%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          // barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    });
  }

}
