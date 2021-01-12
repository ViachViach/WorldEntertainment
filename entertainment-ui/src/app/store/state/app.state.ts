import {RouterReducerState} from '@ngrx/router-store';
import {IConfigState, initialConfigState} from './conf.state';
import {IIsoCodeState, initialIsoCodeState} from './iso.state';

export interface IAppState {
  router?: RouterReducerState;
  config: IConfigState;
  isoCodes: IIsoCodeState;
}

export const initialAppState: IAppState = {
  config: initialConfigState,
  isoCodes: initialIsoCodeState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
