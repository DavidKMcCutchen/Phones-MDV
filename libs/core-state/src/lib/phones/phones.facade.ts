import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Phone } from "@phones/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as PhonesActions from './phones.actions';
import * as PhonesSelectors from './phones.selectors';
import * as fromPhones from './phones.reducer';


@Injectable({
  providedIn: 'root',
})

export class PhoneFacade {
  allPhones$ = this.store.pipe(
    map((state) => PhonesSelectors.getAllPhones(state)),
  )
  selectedPhones$ = this.store.pipe(select(PhonesSelectors.getSelectedPhone));
  loaded$ = this.store.pipe(select(PhonesSelectors.getPhonesLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === PhonesActions.createPhone({} as any) .type  ||
    action.type === PhonesActions.deletePhone({} as any) .type  ||
    action.type === PhonesActions.updatePhone({} as any) .type  
  ),
  )
  selectPhone(phoneId: string) {
    this.dispatch(PhonesActions.selectPhone({ phoneId }))
  }

  loadPhones() {
    this.dispatch(PhonesActions.loadPhones());
  }

  loadPhone(phoneId: string) {
    this.dispatch(PhonesActions.loadPhone({ phoneId }));
  }

  savePhone(phone: Phone) {
    phone.id ? this.updatePhone(phone) : this.createPhone(phone);
  }

  createPhone(phone: Phone) {
    this.dispatch(PhonesActions.createPhone({ phone }));
  }

  updatePhone(phone: Phone) {
    this.dispatch(PhonesActions.updatePhone({ phone }));
  }

  deletePhone(phone: Phone) {
    this.dispatch(PhonesActions.deletePhone({ phone }))
  }

  dispatch(action: Action) {
    this.store.dispatch(action)
  } 

  constructor(
    private store: Store<fromPhones.PhonePartialState>,
    private actions$: ActionsSubject
  ) {}

}