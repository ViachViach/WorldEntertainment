import {IsoCode} from 'src/app/model/iso-code';

export interface IIsoCodeState {
  isoCodes: IsoCode[];
}

export const initialIsoCodeState: IIsoCodeState = {
  isoCodes: []
};
