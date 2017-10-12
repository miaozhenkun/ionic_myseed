import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  config={};
  cconfig={};
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter(){
    this.config={
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '2%',
        right: '3%',
        bottom: '3%',
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
          data:[10, 52, 200, 334, 390, 330, 212]
        }
      ]
    };

    let labelOption = {
      normal: {
        show: true,
        position: 'top',
        fontSize: 12,
        rich: {
          name: {
            textBorderColor: '#fff'
          }
        }
      }
    };
    this.cconfig= {
      // title: {
      //   text: '主要物资采购分析'
      // },
      grid: {
         left: '10%',
        right: '3%'
      },
      color: ['#003366', '#006699', '#4cabce'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['当月', '半年', '一年'],
        left: 'center',
        top: 'top'
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: ['变压器', '电缆', '高压电']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '当月',
          type: 'bar',
          barGap: '10%',
          label: labelOption,
          data: [320, 332, 301]
        },
        {
          name: '半年',
          type: 'bar',
          label: labelOption,
          data: [220, 182, 191]
        },
        {
          name: '一年',
          type: 'bar',
          label: labelOption,
          data: [150, 232, 201]
        }
      ]
    }
  }

}
