import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConfig } from '../model/config';
import { IsoCode } from '../model/iso-code';

@Injectable()
export class IsoCodeService {

  configUrl = `${environment.apiUrl}iso-codes.json`;

  constructor(private _http: HttpClient) { }

  getIsoCodes(): Observable<IsoCode[]> {
    return this._http.get<IsoCode[]>(this.configUrl);
  }
}