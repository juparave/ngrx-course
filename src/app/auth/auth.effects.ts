import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private router: Router) {

        const login$ = this.actions$.pipe(
            // using NgRx `ofType` operator to filter action
            ofType(AuthActions.login),
            tap(action => {

                // now we can use typesafe to call user object
                localStorage.setItem('user', JSON.stringify(action.user));

            })
        );

        login$.subscribe();

    }


}
