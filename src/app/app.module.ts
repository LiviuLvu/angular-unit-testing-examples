import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ParagraphComponent } from "./paragraph/paragraph.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { SubscribeMeComponent } from "./subscribe-me/subscribe-me.component";
import { ProfileComponent } from "./profile/profile.component";
import { FilterComponent } from "./filter/filter.component";
import { UserSettingsService } from "./profile/user-settings.service";
import { MinutesToHoursPipe } from "./pipe/minutes-to-hours.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParagraphComponent,
    FileUploadComponent,
    SubscribeMeComponent,
    ProfileComponent,
    FilterComponent,
    MinutesToHoursPipe
  ],
  bootstrap: [AppComponent],
  providers: [UserSettingsService]
})
export class AppModule {}
