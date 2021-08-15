import { createAction, props } from "@ngrx/store";
import { Phone } from "@phones/api-interfaces";

// Select Entity

export const selectPhone = createAction(
    '[PHONES] Select Phone',
    props<{ phoneId: string}>()
)

// Load All Entities

export const loadPhones = createAction(
    '[PHONES] Load Phones'
)

export const loadPhonesSuccess = createAction(
    '[PHONES] Load Phones Succeeded',
    props<{ phones: Phone[]}>()
)

export const loadPhonesFailure = createAction(
    '[PHONES] Load Phones Failed',
    props<{ error: any }>()
)

// Load Single Entity

export const loadPhone = createAction(
    '[PHONES] Load Phone',
    props<{ phoneId: string}>()
)

export const loadPhoneSuccess = createAction(
    '[PHONES] Load Phone Succeeded',
    props<{ phone: Phone}>()
)

export const loadPhoneFailure = createAction(
    '[PHONES] Load Phone Failure',
    props<{ error: any}>()
)
// Load Entity Update

export const updatePhone = createAction(
    '[PHONES] Update Phone',
    props<{ phone: Phone}>()
)

export const updatePhoneSuccess = createAction(
    '[PHONES] Update Phone Succeeded',
    props<{ phone: Phone}>()
)

export const updatePhoneFailure = createAction(
    '[PHONES] Update Phone Failed',
    props<{ error: any}>()
)

// Load Entity Delete

export const deletePhone = createAction(
    '[PHONE] Phone Deleted',
    props<{phone: Phone}>()
);

export const deletePhoneSuccess = createAction(
    '[PHONE] Phone Deleted Success',
    props<{phone: Phone}>()
);

export const deletePhoneFailure = createAction(
    '[PHONE] Phone Deleted Failure',
    props<{error: any}>()
);

// Load Create Entity

export const createPhone = createAction(
    '[PHONE] Create Phone',
    props<{ phone: Phone}>()
);

export const createPhoneSuccess = createAction(
    '[PHONE] Create Phone Success',
    props<{ phone: Phone}>()
);

export const createPhoneFailure = createAction(
    '[PHONE] Create Phone Failure',
    props<{ error: any }>()
);