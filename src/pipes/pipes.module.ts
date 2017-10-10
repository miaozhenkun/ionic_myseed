import { NgModule } from '@angular/core';
import { TestPipe } from './test/test';
import { DicTransPipe } from './dic-trans/dic-trans';

@NgModule({
  declarations: [TestPipe,
    DicTransPipe

  ],
  imports: [

  ],
  exports: [TestPipe,
    DicTransPipe

  ]
})
export class PipesModule { }
