import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  config={};
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter(){
    console.log('执行了');
    this.config={
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
    };
    console.log(this.config);
  }

}
