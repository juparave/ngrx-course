import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { loadAllCourses } from "./course.actions";
import { areCoursesLoaded } from "./courses.selecters";


@Injectable()
export class CoursesResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

    return this.store
      .pipe(
        // only if courses are not loaded
        select(areCoursesLoaded),
        // this value comes from the selector
        tap(coursesLoaded => {

          if (!this.loading && !coursesLoaded) {
            this.loading = true;
            this.store.dispatch(loadAllCourses());
          }

        }),
        // this observable is going to be terminated only
        // if `coursesLoaded` flag is set to true
        filter(coursesLoaded => coursesLoaded),
        // to ensure observable completion we use first operator
        first(),
        finalize(() => this.loading = false)
      );

  }

}
