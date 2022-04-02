import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        // using NgRx `ofType` operator to filter action
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user))
        )),
        {dispatch: false});

    constructor(private actions$: Actions,
        private router: Router) {

    }


}
