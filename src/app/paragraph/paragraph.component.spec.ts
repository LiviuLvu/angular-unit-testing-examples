import { RouterTestingModule } from "@angular/router/testing";
import { ParagraphComponent } from "./paragraph.component";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

describe("ParagraphComponent", () => {
  let component: ParagraphComponent;
  let fixture: ComponentFixture<ParagraphComponent>;
  let dbgElement: ComponentFixture;
  let element: HTMLElement;

  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

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

  it("should render default message", () => {
    expect(element.innerText).toContain("not specified");
  });

  it("should render phone number", () => {
    component.phone = "0021000111";

    fixture.detectChanges();

    expect(element.innerText).toContain("0021000111");
  });
});
