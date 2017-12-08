import { Component ,ViewChildren, ViewChild,ChangeDetectorRef} from '@angular/core';
import {NavController, IonicPage, Content} from 'ionic-angular';
import {Contacts} from '../../providers/contacts';
import {ChineseCharHandleService} from "../../providers/ChineseCharHandleService";
@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class patientPage {
  index: string = 'A';
  showModal: boolean = false;
  timeout: any;
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  contacts: Array<any> = [];
  items: Array<any> = [];
  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
              public contactsSev: Contacts,
              public ref: ChangeDetectorRef,public ChineseCharHandleService :ChineseCharHandleService) {

    this.contactsSev.getContacts()
      .then(res => {
        this.contacts = this.contactsSev.grouping(res);
        this.items = this.contacts;
      })
  }
  ionViewLoaded(){
    //this.getOffsetTops();
  }
  ionViewDidEnter() {
  //  this.getOffsetTops();
  }


  getOffsetTops() {
    this.offsetTops = this.ionItemGroup._results.map(ele => {
      return ele.nativeElement.offsetTop
    })
  }
  onFocus() {
    this.content.resize();
  }

  selectIndex(index: number) {
    this.index = this.indexes[index];
    const offsetTop = this.ionItemGroup._results[index].nativeElement.offsetTop;
    console.log(offsetTop);
    this.content.scrollTo(0, offsetTop, 300);
    this.createModal();
  }


  onScroll() {

    const threshold = 42;

    if (this.content.scrollTop < threshold) {
      this.index = this.indexes[0];
      return;
    }

    for (let i = this.offsetTops.length; i > 0; i--) {
      if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
        this.index = this.indexes[i];
        this.ref.detectChanges();
        return;
      }
    }
  }

  createModal() {
    clearTimeout(this.timeout);
    this.showModal = true;
    this.timeout = setTimeout(() => {
      this.showModal = false;
      this.ref.detectChanges();
    }, 800)
  }

  //过滤
  filterItems(ev: any) {
    let that=this;
    this.contacts=  this.items;
    let val = ev.target.value;
    console.log(val);
    if (val && val.trim() !== '') {
     val= that.ChineseCharHandleService.query(ev.target.value)[0];
      this.contacts = this.contacts.filter(function(item) {
        return   that.ChineseCharHandleService.query(item.groupName)[0].toLowerCase().includes(val.toLowerCase());
      });
    }
  }




}
