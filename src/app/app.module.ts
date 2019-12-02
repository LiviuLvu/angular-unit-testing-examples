import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParagraphComponent, FileUploadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
