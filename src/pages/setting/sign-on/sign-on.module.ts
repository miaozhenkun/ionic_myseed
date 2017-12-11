import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignOnPage } from './sign-on';
import {Deblocking} from "../../../common/deblocking/deblocking";

@NgModule({
  declarations: [
    SignOnPage,Deblocking
  ],
  imports: [
    IonicPageModule.forChild(SignOnPage),
  ],
  exports:[Deblocking]

})
export class SignOnPageModule {}
