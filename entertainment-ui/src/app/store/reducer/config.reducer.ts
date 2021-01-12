import {createReducer, on} from '@ngrx/store';
import * as ConfigAction from '../action/conf.actions';
import {ConfigActionsUnion} from '../action/conf.actions';
import {initialConfigState, IConfigState} from '../state/conf.state';

const reducer = createReducer(
  initialConfigState,
  on(ConfigAction.getConfigSuccess,
    (state, action) => ({
      ...state,
      config: action.payload || state.config
    })),
  on(ConfigAction.changeConfigLocalSuccess,
    (state, action) => ({
      ...state,
      config: action.payload || state.config
    })),
);

export function configReducer(state: IConfigState = initialConfigState,
                              action: ConfigActionsUnion) {
  return reducer(state, action);
}
