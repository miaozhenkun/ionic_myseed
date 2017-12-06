import { NgModule } from '@angular/core';
import { patientPage} from './patient';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [patientPage],
  imports: [IonicPageModule.forChild(patientPage)],
})
export class patientPageModule { }
