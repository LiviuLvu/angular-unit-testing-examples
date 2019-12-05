import { Component, OnInit } from "@angular/core";
import { UserSettingsService } from "./user-settings.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(public userSettingsService: UserSettingsService) {}

  ngOnInit() {}

  loadProfile(callback, eventData?) {
    this.userSettingsService.getEntity().subscribe(
      res => {
        const profileData = { name: res };
        callback(profileData, eventData);
      },
      err => {
        console.warn(err);
        callback({}, eventData);
      }
    );
  }
}
