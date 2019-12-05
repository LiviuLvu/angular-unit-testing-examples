// jasmine spy example

import { TestBed, ComponentFixture } from "@angular/core/testing";
// https://angular.io/api/platform-browser/By
import { of } from "rxjs";
import { ProfileComponent } from "./profile.component";
import { UserSettingsService } from "./user-settings.service";

xdescribe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [UserSettingsService]
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should handle errors in loadProfile 1", () => {
    spyOn(component.userSettingsService, "getEntity").and.returnValue(
      of({
        err: "test error"
      })
    );
    const callbackSpy = jasmine.createSpy();

    component.loadProfile(callbackSpy);

    expect(callbackSpy).toHaveBeenCalledWith({}, undefined);
  });
});
