import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../pages/welcome/welcome";
import {HomePage} from "../pages/home/home";
declare var window;
@Component({
   templateUrl: 'app.html'
  //template: `<ion-nav [root]="rootPage"></ion-nav>`,
})
export class MyApp {
  rootPage:any = TabsPage;
  platform: any = Platform;
  toast: any = ToastController;
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, toast: ToastController,public storage: Storage) {
    this.platform = platform;
    this.toast = toast;
    this.storage.get('firstIn').then((result) => {
      console.log(result);
      if (result) {
        this.rootPage = TabsPage;
       // this.storage.set('firstIn', true);
      } else {
        this.storage.set('firstIn', true);
        this.rootPage = WelcomePage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeApp();
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      //注册返回按键事件
      this.platform.registerBackButtonAction((): any => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;
        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            //当前页面为tabs，退出APP
            return this.showExit();
          }
          //当前页面为tabs的子页面，正常返回
          return this.nav.pop();
        }
        let tabs = page.tabs;
        let activeNav = tabs.getSelected();
        if (!activeNav.canGoBack()) {
          //当前页面为tab栏，退出APP
          return this.showExit();
        }
        //当前页面为tab栏的子页面，正常返回
        return activeNav.pop();
      }, 101);

    });
  }

  //双击退出提示框，这里使用Ionic2的ToastController

  showExit() {
    if (this.backButtonPressed) this.platform.exitApp();  //当触发标志为true时，即2秒内双击返回按键则退出APP
    else {
      let toast = this.toast.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      //2秒内没有再次点击返回则将触发标志标记为false
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000)
    }
  }



}
