import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userSettingsService;
  _tableEntityName;
  
  constructor() {}

  ngOnInit() {}
  loadProfile(callback, eventData?) {
    this.userSettingsService.getEntity(this._tableEntityName).subscribe(
      res => {
        const profileData = JSON.parse(get(res["Item"], "entity", "{}"));
        callback(profileData, eventData);
      },
      err => {
        console.warn(err);
        callback({}, eventData);
      }
    );
  }
}
