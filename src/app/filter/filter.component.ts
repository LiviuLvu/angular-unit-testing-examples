import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  errorMessage: string;
  isFilterValid;
  selectedFilterName;
  newFilter;
  parseAndSaveFilters;
  editFilterMode;

  constructor() {}

  ngOnInit() {}
  saveFilter() {
    this.errorMessage = "";

    if (this.isFilterValid()) {
      this.editFilterMode = true;
      this.selectedFilterName = this.newFilter.name;
      this.parseAndSaveFilters();
    }
  }
}
