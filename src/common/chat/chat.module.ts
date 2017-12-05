import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Chat} from "./Chat";
import {EmojiPickerComponentModule} from "../emoji-picker/emoji-picker.module";

@NgModule({
  declarations: [
    Chat,
  ],
  imports: [
    EmojiPickerComponentModule,IonicPageModule.forChild(Chat)
  ],
  exports: [
    Chat
  ]
})
export class ChatModule {
}
