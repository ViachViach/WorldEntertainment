import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';
import {IConfig} from '../model/config';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ConfigService {

  configUrl = `${environment.apiUrl}config.json`;

  constructor() {
  }

  getConfig(): Observable<IConfig> {
    const browserLocal = navigator.language;
    return location.pathname.startsWith('/ru') ?
      of({local: 'Ru'}) : browserLocal === 'en-US' ?
        of({local: 'En'}) : browserLocal === 'ru-Ru' ?
          of({local: 'Ru'}) : of({local: 'En'});
          // this.httpClient.get<IConfig>(this.configUrl);
  }
}
