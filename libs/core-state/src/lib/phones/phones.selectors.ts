import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyPhone } from "@phones/api-interfaces";
import { phoneAdapter, PhoneState, PHONE_FEATURE_KEY } from "./phones.reducer";

export const getPhoneState = createFeatureSelector<PhoneState>(PHONE_FEATURE_KEY);

const { selectAll, selectEntities } = phoneAdapter.getSelectors();

export const getPhonesLoaded = createSelector(
  getPhoneState,
  (state: PhoneState) => state.loaded
);

export const getPhoneError = createSelector(
  getPhoneState,
  (state: PhoneState) => state.error
);

export const getAllPhones = createSelector(
  getPhoneState,
  (state: PhoneState) => selectAll(state)
);

export const getPhoneEntities = createSelector(
  getPhoneState,
  (state: PhoneState) => selectEntities(state)
);

export const getSelectedPhoneId = createSelector(
  getPhoneState,
  (state: PhoneState) => state.selectedId
);

export const getSelectedPhone = createSelector(
  getPhoneEntities,
  getSelectedPhoneId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPhone
)