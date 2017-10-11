import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { IonicPageModule } from 'ionic-angular';
import {PipesModule} from "../../pipes/pipes.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage),PipesModule,DirectivesModule],
})
export class homePageModule { }
