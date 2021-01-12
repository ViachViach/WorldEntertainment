import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';
import { IAppState } from '../state/app.state';
import { configReducer } from './config.reducer';
import { isoCodeReducer } from './isoCode.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    config: configReducer,
    isoCodes: isoCodeReducer,
};

export function logger(reducer: ActionReducer<IAppState>): any {
    return storeLogger()(reducer);
  }
export const metaReducers: MetaReducer<IAppState>[] = environment.production ? [] : [logger];
