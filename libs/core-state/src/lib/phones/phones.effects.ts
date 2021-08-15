import { Injectable } from "@angular/core";
import { Phone } from "@phones/api-interfaces";
import { PhonesService } from "@phones/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as PhonesActions from './phones.actions';
import { filter, map, tap } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class PhoneEffects {
    loadPhone$ = createEffect(() => 
        this.actions$.pipe(
            ofType(PhonesActions.loadPhone),
            fetch({
                run: (action) => 
                    this.phonesService
                        .find(action.phoneId)
                        .pipe(
                            map((phone: Phone) => PhonesActions.loadPhoneSuccess({ phone }))
                        ),
                    onError: (action, error) => PhonesActions.loadPhoneFailure({ error })    
            })
        ))
    loadPhones$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PhonesActions.loadPhones), // filter((action) => action.type === PhonesActions.loadPhones.type)
            fetch({
                run: () =>
                    this.phonesService
                        .all()
                        .pipe(
                            map((phones: Phone[]) =>
                            PhonesActions.loadPhonesSuccess({ phones })
                        )
                ),
            onError: (action, error) => PhonesActions.loadPhonesFailure({ error }),
          })
        )
      );
    
      updatePhone$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PhonesActions.updatePhone),
        pessimisticUpdate({
          run: (action) =>
          this.phonesService
          .update(action.phone)
          .pipe(
            map((phone: Phone) => PhonesActions.updatePhoneSuccess({ phone })
            )
          ),
        onError: (action, error) => PhonesActions.updatePhoneFailure({ error })  
        })
      ) )
    
      deletePhone$ = createEffect(() =>
        this.actions$.pipe(
          ofType(PhonesActions.deletePhone),
          pessimisticUpdate({
            run: (action) =>
            this.phonesService
            .delete(action.phone)
            .pipe(
              map(() => PhonesActions.deletePhoneSuccess({ phone: action.phone })
              )
            ),
          onError: (action, error) => PhonesActions.deletePhoneFailure({ error })  
          })
        )
        )
    
        createPhone$ = createEffect(() =>
        this.actions$.pipe(
          ofType(PhonesActions.createPhone),
          pessimisticUpdate({
            run: (action) =>
            this.phonesService
            .create(action.phone)
            .pipe(
              map((phone: Phone) => PhonesActions.createPhoneSuccess({ phone })
              )
            ),
          onError: (action, error) => PhonesActions.createPhoneFailure({ error })  
          })
        ))
      
    

    constructor(private actions$: Actions, private phonesService: PhonesService) {}   
}