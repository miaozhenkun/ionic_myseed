import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Config} from 'ionic-angular';
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
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { DatabaseProvider } from '../providers/DatabaseProvider';

import {GlobalData} from '../providers/GlobalData';
import {Logger} from "../providers/Logger";
import {UTIL_DIALOG} from "../common/UTIL_DIALOG";

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

import { IonicStorageModule } from '@ionic/storage';
import {MyModule} from "../pages/demo/my.module";

import {NativeService} from "../providers/NativeService";
import {HttpMyNetService} from '../providers/HttpMyNetService';
import { LookService } from "../providers/look-service";
import { UserService } from "../providers/UserService";
import {ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave} from "./modal-transitions";
import { JPush } from 'ionic3-jpush';
import {Device} from "@ionic-native/device";
import {EmojiProvider} from "../providers/emoji";
import {MainMyService} from "../providers/mainMyservice";
import {AlphaScrollModule} from "ionic-alpha-scroll";
import {Contacts} from "../providers/contacts";
import {ChineseCharHandleService} from "../providers/ChineseCharHandleService";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlphaScrollModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',       //隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      scrollAssist:false,
      autoFocusAssit:false
    }),
    IonicStorageModule.forRoot(
      {
        name: '__mydb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),//就这里
    MyModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    SQLitePorter,
    JPush,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    NativeService,
    Logger,
    UTIL_DIALOG,
    GlobalData,
    HttpMyNetService,
    LookService,
    UserService,
    MainMyService,
    EmojiProvider,
    ChineseCharHandleService,
    Contacts
  ]
})
export class AppModule {

  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }
}
