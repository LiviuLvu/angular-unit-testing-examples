// property bindings example
import { ParagraphComponent } from "./paragraph.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe("ParagraphComponent", () => {
  let component: ParagraphComponent;
  let fixture: ComponentFixture<ParagraphComponent>;
  let dbgElement: ComponentFixture;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphComponent]
    });
    fixture = TestBed.createComponent(ParagraphComponent);
    component = fixture.componentInstance;

    dbgElement = fixture.debugElement.query(By.css(".phone"));
    element = dbgElement.nativeElement;

    fixture.detectChanges();
  });

  it("paragraph should contain default message", () => {
    expect(element.innerText).toContain("not specified");
  });

  it("paragraph should contain phone number", () => {
    component.phone = "0021000111";

    fixture.detectChanges();

    expect(element.innerText).toContain("0021000111");
  });
});
