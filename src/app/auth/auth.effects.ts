import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private router: Router) {

        actions$.subscribe(action => {
            if (action.type == '[Login Page] User Login') {
                localStorage.setItem('user', JSON.stringify(action["user"]));
            }
        });
    }


}
