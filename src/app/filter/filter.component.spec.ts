// jasmine spy example

import { FilterComponent } from "./filter.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// https://angular.io/api/platform-browser/By
import { By } from "@angular/platform-browser";

describe("FilterComponent", () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    });

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('verify save filter if the filter is valid', () => {
    spyOn(component, 'parseAndSaveFilters');
    spyOn(component, 'isFilterValid').and.returnValue(true);

    component.errorMessage = 'error message';
    component.editFilterMode = false;
    component.selectedFilterName = 'test';
    component.newFilter = {name:  'new filter'};

    component.saveFilter();

    expect(component.errorMessage).toBe('');
    expect(component.editFilterMode).toBeTruthy();
    expect(component.selectedFilterName).toBe('new filter');
    expect(component.parseAndSaveFilters).toHaveBeenCalled();
  });


  it('verify save filter if the filter is not valid', () => {
    spyOn(component, 'parseAndSaveFilters');
    spyOn(component, 'isFilterValid').and.returnValue(false);

    component.errorMessage = 'error message';
    component.editFilterMode = false;
    component.selectedFilterName = 'test';
    component.newFilter = {name:  'new filter'};

    component.saveFilter();

    expect(component.errorMessage).toBe('');
    expect(component.editFilterMode).toBeFalsy();
    expect(component.selectedFilterName).toBe('test');
    expect(component.parseAndSaveFilters).not.toHaveBeenCalled();
  });
});