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
import {PreviewPicturePageModule} from '../../common/preview-picture/preview-picture.module'

@NgModule({
  declarations: [ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage,AreasSelect,PagingPage,Deblocking],
  imports: [IonicPageModule,MapLocationModule,PreviewPicturePageModule],
  providers: [ IonicPageModule,],
  exports: [IonicPageModule,AreasSelect,PagingPage,Deblocking],
  entryComponents:[ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,LoginPage,employeeListPage]
})
export class DemoModule {
}
