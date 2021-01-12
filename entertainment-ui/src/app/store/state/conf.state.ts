import { IConfig } from 'src/app/model/config';
import { EConfLanguage } from 'src/app/model/config-i18n.enum';

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config : { local : EConfLanguage.EN }
};
