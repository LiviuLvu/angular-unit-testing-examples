// event bindings example

import { SubscribeMeComponent } from "./subscribe-me.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";

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

  it('should create subscribe-me', () => {
    expect(component).toBeTruthy();
  });
});
