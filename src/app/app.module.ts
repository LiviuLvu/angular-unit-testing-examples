import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SubscribeMeComponent } from './subscribe-me/subscribe-me.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParagraphComponent, FileUploadComponent, SubscribeMeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
