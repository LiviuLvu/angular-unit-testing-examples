import { RouterTestingModule } from "@angular/router/testing";
import { ParagraphComponent } from "./paragraph.component";
import { TestBed, async } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

describe("ParagraphComponent", () => {
  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ParagraphComponent]
    }).compileComponents();
  }));
  it("should render paragraph component", async(() => {
    const fixture = TestBed.createComponent(ParagraphComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      "paragraph works!"
    );
  }));
});
