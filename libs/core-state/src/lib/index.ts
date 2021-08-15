import { ActionReducerMap } from "@ngrx/store";
import * as fromPhones from './phones/phones.reducer';

export interface AppState {
[fromPhones.PHONE_FEATURE_KEY]: fromPhones.PhoneState
}

export const reducers: ActionReducerMap<AppState> = {
[fromPhones.PHONE_FEATURE_KEY]: fromPhones.phoneReducer
}