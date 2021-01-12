import {createAction, props, union} from '@ngrx/store';
import {IConfig} from 'src/app/model/config';

export enum EConfingAction {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
  ChangeConfigLocal = '[Config] Update Config Local',
  ChangeConfigLocalSuccess = '[Config] Update Config Local Success',
  GoToNewLocal = '[Config] Go To New Local'
}

export const getConfig = createAction(EConfingAction.GetConfig);

export const getConfigSuccess = createAction(
  EConfingAction.GetConfigSuccess,
  props<{ payload: IConfig }>()
);

export const changeConfigLocal = createAction(
  EConfingAction.ChangeConfigLocal,
  props<{ local: string }>()
);

export const changeConfigLocalSuccess = createAction(
  EConfingAction.ChangeConfigLocalSuccess,
  props<{ payload: IConfig }>()
);

export const goToNewLocal = createAction(
  EConfingAction.GoToNewLocal
);

const actions = union({
  getConfig,
  getConfigSuccess,
  changeConfigLocal,
  changeConfigLocalSuccess,
  goToNewLocal
});

export type ConfigActionsUnion = typeof actions;
