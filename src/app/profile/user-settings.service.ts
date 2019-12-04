import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserSettingsService {

  constructor(private _http: HttpClient) { }

  getEntity(id): Observable<any> {
    return this._http.get('STORAGE_URL');
  }

}