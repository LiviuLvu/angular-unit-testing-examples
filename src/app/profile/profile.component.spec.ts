// jasmine spy example

import { ProfileComponent } from "./profile.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// https://angular.io/api/platform-browser/By
import { By } from "@angular/platform-browser";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent]
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should handle errors in loadProfile 1", () => {
    spyOn(component["userSettingsService"], "getEntity").and.returnValue(
      of({
        err: "test error"
      })
    );
    let callbackSpy = jasmine.createSpy();

    component.loadProfile(callbackSpy);

    expect(callbackSpy).toHaveBeenCalledWith({}, undefined);
  });
});
