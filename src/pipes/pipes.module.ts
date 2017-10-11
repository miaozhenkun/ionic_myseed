import { NgModule } from '@angular/core';

import { DicTransPipe } from './dic-trans/dic-trans';
import {DefaultValuePipe} from "./defaultValue/defaultValue";
@NgModule({
  declarations: [DefaultValuePipe, DicTransPipe
  ],
  imports: [
  ],
  exports: [DefaultValuePipe, DicTransPipe
  ]
})
export class PipesModule { }
