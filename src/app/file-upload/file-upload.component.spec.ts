import { FileUploadComponent } from './file-upload.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileUploadComponent, 
      ]
    });

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create file uploader component', () => {
    expect(component).toBeTruthy();
  });
});
