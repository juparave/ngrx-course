import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';


export const selectAuthState =
    createFeatureSelector<AuthState>("auth");


// memoize function
export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);


// memoize function using other selectors
export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);
