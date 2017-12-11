import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {ChartjsDemoPage} from "../demo/chartjs-demo/chartjs-demo";
import {PaginationDemoPage} from  "../demo/pagination-demo/pagination-demo";
import {WorkMapPage} from  "../demo/work-map/work-map";
import {WorkPage} from  "../demo/work/work-map";
import {LoginPage} from  "../user/login/login";
import {AreasSelect} from '../../common/area-select/AreasSelect';
import {PagingPage} from '../../common/paging/paging';

import {MapLocationModule} from "../../common/map-component/map-location/map-location.module";
import {PreviewPicturePageModule} from '../../common/preview-picture/preview-picture.module';
import {MyPage} from './my';
import {RegisterPage} from "../user/login/register/register";
import {FindPasswordPage} from "../user/login/find-password/find-password";
import {SelectPicturePageModule} from "../../common/select-picture/select-picture.module";
import {TransitionDemoPageModule} from "./transition-demo/transition-demo.module";
import {ModalFromRightPageModule} from "./transition-demo/modal-from-right/modal-from-right.module";
import {ModalScalePageModule} from "./transition-demo/modal-scale/modal-scale.module";
import {ChatModule} from "../../common/chat/chat.module";
import {employeeListPage} from "../patient/base/employeeList";

@NgModule({
  declarations: [MyPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage,AreasSelect,PagingPage,RegisterPage,FindPasswordPage],
  imports: [IonicPageModule,MapLocationModule,PreviewPicturePageModule, SelectPicturePageModule,
    TransitionDemoPageModule,ModalScalePageModule, ModalFromRightPageModule , ChatModule,IonicPageModule.forChild(MyPage)],
  providers: [ IonicPageModule,],
  exports: [IonicPageModule,AreasSelect,PagingPage],
  entryComponents:[ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage,RegisterPage,FindPasswordPage]
})
export class MyModule {
}
