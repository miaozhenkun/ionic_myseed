import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService } from '../../../providers/UserService';
import {PAGE_SIZE } from '../../../providers/Constants';

@Component({
  selector: 'page-employeeList',
  templateUrl: 'employeeList.html'
})
export class employeeListPage {
  items:any=[];
 hasmore = true; // 是否有更多数据
  isRun = false; // 是否在加载数据
  itemsTotal = null; // 列表数据总条数
  page = 1; //分页起始条数
  searchParams={page: null, total: null};
  constructor(public navCtrl: NavController,private userService:UserService) {

  }

  ionViewDidLoad() {
      this.loadData(true,null,null);
  }
  private loadData(isReload,refresher:any,infiniteScroll:any) {
    this.searchParams.page=this.page;
    this.searchParams.total=this.itemsTotal;
    if (!this.isRun) {
      this.isRun = true;
      if (isReload) {
        this.itemsTotal = null;
      }
      this.userService.getStaffList(this.searchParams).subscribe(data=>{
        if(data.data){
          var rows = data.data.rows;
          this.itemsTotal=data.total;
          if (!rows || rows.length < PAGE_SIZE) {
            this.hasmore = false;
          }
          this.page++;
          if(isReload){//刷新
            this.items = rows;
          }else {
            this.items = this.items.concat(rows);
          }
        }
          if(refresher){
            refresher.complete();
          }
          if(infiniteScroll){
            infiniteScroll.complete();
          }
        this.isRun = false;
      },data=>{
        this.hasmore = false;
        this.isRun = false;
        if(refresher){
          refresher.complete();
        }
        if(infiniteScroll){
          infiniteScroll.complete();
        }
        }
      )
      this.isRun = false;
    }
  }


  goBack() {
    this.navCtrl.pop();
  }
  //上拉加载
  doInfinite(infiniteScroll) {
    if (this.hasmore) {
     this.loadData(false,null,infiniteScroll);
    }
    // setTimeout(() => {
    //   infiniteScroll.complete();
    // }, 500);
  }
  //下拉刷新
  doRefresh(refresher) {
    this.hasmore = true;
    this.page = 1;
    this.loadData(true,refresher,null);
  }


}
