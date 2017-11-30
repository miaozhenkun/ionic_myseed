import { NgModule } from '@angular/core';
import { ContactPage} from './contact';
import { IonicPageModule } from 'ionic-angular';
import {Echart} from "../../common/echart/echarts";


@NgModule({
  declarations: [ContactPage,Echart],
  imports: [IonicPageModule.forChild(ContactPage)],
  exports:[Echart]
})
export class contactPageModule { }
