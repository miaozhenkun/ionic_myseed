import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import {AppVersion} from '@ionic-native/app-version';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';
import {AppMinimize} from '@ionic-native/app-minimize';
import { SQLite } from '@ionic-native/sqlite';
import { SPEDATA } from '../common/SPEDATA';


import {GlobalData} from '../providers/GlobalData';
import {Logger} from "../providers/Logger";
import {UTIL_DIALOG} from "../common/UTIL_DIALOG";

import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DemoPage } from '../pages/demo/demo';
import { TabsPage } from '../pages/tabs/tabs';

import { IonicStorageModule } from '@ionic/storage';
import {DemoModule} from "../pages/demo/demo.module";

import {NativeService} from "../providers/NativeService";
import {HttpMyNetService} from '../providers/HttpMyNetService';
//import {HttpServices} from '../providers/HttpServices';
import { LookService } from "../providers/look-service";
import { UserService } from "../providers/UserService";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',       //隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }),
    IonicStorageModule.forRoot(),//就这里
    DemoModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Toast,
    File,
    Transfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppVersion,
    AppMinimize,
    SQLite,
    SPEDATA,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeService,
    Logger,
    UTIL_DIALOG,
    GlobalData,
    HttpMyNetService,
   // HttpServices,
    LookService,
    UserService
  ]
})
export class AppModule {

}
