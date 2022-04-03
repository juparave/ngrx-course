import { Course } from "../model/course";


// this is the entity format
export interface CourseState {
  // entity is a map whose keys are id's of the entities
  entities: {[key: number]: Course},
  // store the order of the entities
  ids: number[]
}
