import { NgModule } from '@angular/core';
import { ContactPage} from './contact';
import { IonicPageModule } from 'ionic-angular';
import {Echart} from "../../common/echart/echarts";
import {TestDemoPage} from "./test-demo/test-demo";

@NgModule({
  declarations: [ContactPage,Echart,TestDemoPage],
  imports: [IonicPageModule.forChild(ContactPage)],
  exports:[Echart],
  entryComponents:[TestDemoPage],
})
export class contactPageModule { }
