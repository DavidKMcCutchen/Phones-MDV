import { Phone } from "@phones/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PhonesActions from './phones.actions';

export const PHONE_FEATURE_KEY = 'phones';

export interface PhoneState extends EntityState<Phone> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
};

export interface PhonePartialState {
  readonly [PHONE_FEATURE_KEY]: PhoneState
};

export const phoneAdapter: EntityAdapter<Phone> = createEntityAdapter<Phone>();

export const initialPhoneState: PhoneState = phoneAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, {error}): PhoneState => ({ ...state, error});

const onDispatch = (state, action): PhoneState => ({
  ...state,
  loaded: false,
  error: null
})

const _phoneReducer = createReducer(
  initialPhoneState,
  on(
    PhonesActions.loadPhoneFailure,
    PhonesActions.loadPhonesFailure,
    PhonesActions.deletePhoneFailure,
    PhonesActions.updatePhoneFailure,
    PhonesActions.createPhoneFailure,
    onFailure
  ),
  on(
    PhonesActions.loadPhone,
    PhonesActions.loadPhones,
    PhonesActions.deletePhone,
    PhonesActions.updatePhone,
    PhonesActions.createPhone,
    onDispatch
  ),
  on(
    PhonesActions.loadPhoneSuccess, (state, { phone}) =>
    phoneAdapter.upsertOne(phone, { ...state, loaded: true})
  ),
  on(
    PhonesActions.selectPhone, (state, { phoneId}) =>({
      ...state,
      selectedId: phoneId
    }) 
  ),
  on(
    PhonesActions.loadPhonesSuccess, (state, { phones }) =>
    phoneAdapter.setAll(phones, {...state, loaded: true})
  ),
  on(
    PhonesActions.deletePhoneSuccess, (state, { phone }) =>
    phoneAdapter.removeOne(phone.id, {...state, loaded: true})
  ),
  on(
    PhonesActions.updatePhoneSuccess, (state, { phone}) =>
    phoneAdapter.updateOne(
      {id: phone.id, changes: phone},
      {...state, loaded: true}
    )
  ),
  on(
    PhonesActions.createPhoneSuccess, (state, { phone }) =>
    phoneAdapter.addOne(phone, {...state, loaded: true}) 
  ),
)

  export function phoneReducer(
    state: PhoneState | undefined,
    action: Action
  ) {
    return _phoneReducer(state, action)
  }