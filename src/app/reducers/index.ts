import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

// example of metareducer
export function logger(reducer:ActionReducer<any>)
  : ActionReducer<any> {
    return (state, action) => {

      // just print to the console the current state and action
      console.log("state before: ", state);
      console.log("action", action);

      // continue reducer chain
      return reducer(state, action);
    }

  }


export const metaReducers: MetaReducer<AppState>[] =
  // metareducers are going to executed in the order of the array
  // in this case only `logger` metareducer is executed
  !environment.production ? [logger] : [];


