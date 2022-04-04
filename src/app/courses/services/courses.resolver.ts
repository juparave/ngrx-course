import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseEntityService } from './course-entity.service';
import { filter, first, map, tap } from 'rxjs/operators';


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    constructor(private coursesService: CourseEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

            // using entity-service `loaded` flag to load only when
            // we dont have data already loaded
            return this.coursesService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.coursesService.getAll();
                    }
                }),
                // only true values, be sure that the data is loaded before
                // comlete the transition
                filter(loaded => !!loaded),
                // make sure to complete the observable as the first value is emmited
                first()

            );


        }

}
