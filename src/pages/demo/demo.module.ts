import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ChartjsDemoPage} from "../demo/chartjs-demo/chartjs-demo";
import {PaginationDemoPage} from  "../demo/pagination-demo/pagination-demo";
import {WorkMapPage} from  "../demo/work-map/work-map";
import {WorkPage} from  "../demo/work/work-map";
import {LoginPage} from  "../user/login/login";
import {employeeListPage} from  "../about/base/employeeList";


import {AreasSelect} from '../../common/area-select/AreasSelect';
import {PagingPage} from '../../common/paging/paging';
import {Deblocking} from '../../common/deblocking/deblocking';

import {MapLocationModule} from "../../common/map-component/map-location/map-location.module";
import {PreviewPicturePageModule} from '../../common/preview-picture/preview-picture.module';
import {DemoPage} from  '../demo/demo';
import {RegisterPage} from "../user/login/register/register";
import {FindPasswordPage} from "../user/login/find-password/find-password";
import {SelectPicturePageModule} from "../../common/select-picture/select-picture.module";
import {TransitionDemoPageModule} from "./transition-demo/transition-demo.module";
import {ModalFromRightPageModule} from "./transition-demo/modal-from-right/modal-from-right.module";
import {ModalScalePageModule} from "./transition-demo/modal-scale/modal-scale.module";
import {ChatModule} from "../../common/chat/chat.module";
// import {EmojiPickerComponentModule} from "../../common/emoji-picker/emoji-picker.module";


@NgModule({
  declarations: [DemoPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage,AreasSelect,PagingPage,Deblocking,RegisterPage,FindPasswordPage],
  imports: [IonicPageModule,MapLocationModule,PreviewPicturePageModule, SelectPicturePageModule,
    TransitionDemoPageModule,ModalScalePageModule, ModalFromRightPageModule , ChatModule,IonicPageModule.forChild(DemoPage)],
  providers: [ IonicPageModule,],
  exports: [IonicPageModule,AreasSelect,PagingPage,Deblocking],
  entryComponents:[ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage,RegisterPage,FindPasswordPage]
})
export class DemoModule {
}
