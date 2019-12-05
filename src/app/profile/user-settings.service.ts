import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserSettingsService {

  constructor(private http: HttpClient) { }

  getEntity(): Observable<any> {
    return this.http.get('STORAGE_URL');
  }

}
