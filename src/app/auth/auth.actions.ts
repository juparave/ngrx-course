import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';


export const login = createAction(
  // follow convention for action names
  // [Source of the action] Event
  "[Login Page] User Login",
  // Content of the payload of the action
  props<{user: User}>()
);



export const logout = createAction(
  "[Top Menu] Logout"
);
