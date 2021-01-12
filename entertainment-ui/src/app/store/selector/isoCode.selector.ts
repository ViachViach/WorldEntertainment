import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IIsoCodeState} from '../state/iso.state';

const isoCodeState = (state: IAppState) => state.isoCodes;

export const selectIsoCodes = createSelector(isoCodeState, (state: IIsoCodeState) => state.isoCodes);
