// event bindings example

import { SubscribeMeComponent } from "./subscribe-me.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// https://angular.io/api/platform-browser/By
import { By } from "@angular/platform-browser";

describe("SubscribeMeComponent", () => {
  let component: SubscribeMeComponent;
  let fixture: ComponentFixture<SubscribeMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeMeComponent]
    });

    fixture = TestBed.createComponent(SubscribeMeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should display confirmation on subscribe button click", () => {
    component.isSubscribed = false;
    fixture.detectChanges();

    let subscribeButton = fixture.debugElement.query(By.css("button"));
    subscribeButton.triggerEventHandler("click", null);

    expect(component.isSubscribed).toBe(true);
  });
});
