import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ConfigAction from '../action/conf.actions';
import {switchMap, withLatestFrom} from 'rxjs/operators';
import {IConfig} from 'src/app/model/config';
import {of} from 'rxjs';
import {ConfigService} from 'src/app/service/config.service';
import {select, Store} from '@ngrx/store';
import {selectConfig} from '../selector/config.selector';
import {IAppState} from '../state/app.state';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class ConfigEffect {

  constructor(private store: Store<IAppState>,
              private configService: ConfigService,
              private actions: Actions) {
  }

  @Effect()
  getConfig$ = this.actions.pipe(
    ofType(ConfigAction.getConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: IConfig) => {
      console.log(config);
      return of(ConfigAction.getConfigSuccess({payload: config}));
    })
  );

  @Effect()
  changeConfigLocal$ = this.actions.pipe(
    ofType(ConfigAction.changeConfigLocal),
    withLatestFrom(
      this.store.pipe(select(selectConfig))
    ),
    switchMap(([action, configState]) => {
      return of(ConfigAction.changeConfigLocalSuccess({payload: {local: action.local}}));
    })
  );

  @Effect()
  changeLocal$ = this.actions.pipe(
    ofType(ConfigAction.changeConfigLocalSuccess),
    withLatestFrom(
      this.store.pipe(select(selectConfig))
    ),
    switchMap(([action, configState]) => {
      if (configState.local === 'En') {
        window.location.href = `${environment.host}/en`;
      } else if (configState.local === 'Ru') {
        window.location.href = `${environment.host}/ru`;
      } else {
        window.location.href = `${environment.host}/en`;
      }
      return of(ConfigAction.goToNewLocal());
    })
  );
}
