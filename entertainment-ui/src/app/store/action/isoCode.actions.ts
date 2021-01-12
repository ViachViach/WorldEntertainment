import { createAction, props, union } from '@ngrx/store';
import { IsoCode } from 'src/app/model/iso-code';

export enum EIsoCodeAction {
    GetIsoCode = '[IsoCode] Get Iso Codes',
    GetIsoCodeSuccess = '[IsoCode] Get Iso Codes Success',
}

export const getIsoCodes = createAction(EIsoCodeAction.GetIsoCode);

export const getIsoCodesSuccess = createAction(
    EIsoCodeAction.GetIsoCodeSuccess,
    props<{ payload: IsoCode[] }>()
);

const actions = union({
    getIsoCodes,
    getIsoCodesSuccess
});

export type IsoCodeActionsUnion = typeof actions;
