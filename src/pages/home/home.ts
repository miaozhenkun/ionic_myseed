import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
declare var echarts;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  @ViewChild('cerchart') container: ElementRef;
  chart: any;
  gener;
  purName;
  config;
  data=[];
  now = new Date();
 //oneDay = 24 * 3600 * 1000;
  oneDay =  1000;
  value = Math.random() * 1000;

  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){
    this.gener='01';
    this.purName=null;
    for(var i = 0; i < 10; i++) {
      this.data.push(this.randomData());
    }
    this.config={
      title: {
        text: '动态数据 + 时间坐标轴'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }]
    };

  }
  ionViewDidEnter() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption(this.config);

    setInterval(() => {
      this.data.shift();
      this.data.push(this.randomData());
      this.chart.setOption({
        series: [{
          data: this.data
        }]
      });
    }, 1000);
  }
  randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value =  Math.random() * 100 - 10;
    return {
      name: this.now.toString(),
      value: [
        //[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        [ this.now.getFullYear(),this.now.getMinutes(), this.now.getSeconds()].join('/'),
        Math.round(this.value)
      ]
    }
  }


}
