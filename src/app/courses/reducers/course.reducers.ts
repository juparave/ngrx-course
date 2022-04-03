import { EntityState } from "@ngrx/entity";
import { Course } from "../model/course";


// using EntityState 
export interface CourseState extends EntityState<Course> {

}
