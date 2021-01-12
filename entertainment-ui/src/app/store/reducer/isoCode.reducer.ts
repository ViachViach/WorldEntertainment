import {createReducer, on} from '@ngrx/store';
import * as IsoCodeAction from '../action/isoCode.actions';
import {IsoCodeActionsUnion} from '../action/isoCode.actions';
import {initialIsoCodeState, IIsoCodeState} from '../state/iso.state';

const reducer = createReducer(
  initialIsoCodeState,
  on(IsoCodeAction.getIsoCodesSuccess,
    (state, action) => ({
      ...state,
      isoCodes: action.payload || state.isoCodes
    }))
);

export function isoCodeReducer(state: IIsoCodeState = initialIsoCodeState,
                               action: IsoCodeActionsUnion) {
  return reducer(state, action);
}
