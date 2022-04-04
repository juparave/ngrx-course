import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course, compareCourses } from "../model/course";


// using EntityState 
export interface CourseState extends EntityState<Course> {
  allCoursesLoaded: boolean
}

// using NgRx EntityAdapter
export const adapter = createEntityAdapter<Course>({
  // provide compare function to resolve the order of the
  // entities
  sortComparer: compareCourses,
  // entity key, we use the default id name, so is not
  // necesary to define a `selectId`
  // selectId: course => course.id
});

export const initialCoursesState = adapter.getInitialState ({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCoursesState,

  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addAll(
      action.courses,
      // update allCoursesLoaded flag
      {...state, allCoursesLoaded: true}
    )),

  on(CourseActions.courseUpdated, 
    (state, action) => adapter.updateOne(
      action.update, 
      state
    ))

)

export const {selectAll} = adapter.getSelectors();
