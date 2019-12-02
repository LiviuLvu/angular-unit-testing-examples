import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') public fileInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public onAddFile(event): void {
    console.log('>>> File added', event);
  }
}