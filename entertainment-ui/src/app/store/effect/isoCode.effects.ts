import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as IsoCodeAction from '../action/isoCode.actions';
import {switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IsoCodeService} from 'src/app/service/iso-code.service';
import {IsoCode} from 'src/app/model/iso-code';
import {of} from 'rxjs';

@Injectable()
export class IsoCodeffect {

  constructor(private store: Store<IAppState>,
              private isoCodeService: IsoCodeService,
              private actions$: Actions) {
  }

  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType(IsoCodeAction.getIsoCodes),
    switchMap(() => this.isoCodeService.getIsoCodes()),
    switchMap((isoCodes: IsoCode[]) => {
      return of(IsoCodeAction.getIsoCodesSuccess({payload: isoCodes}));
    })
  );
}
