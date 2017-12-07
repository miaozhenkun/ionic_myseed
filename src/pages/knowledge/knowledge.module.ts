import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {knowledgePage} from "./knowledge";


@NgModule({
  declarations: [
    knowledgePage,
  ],
  imports: [
    IonicPageModule.forChild(knowledgePage),
  ],
})
export class knowledgePageModule {}
