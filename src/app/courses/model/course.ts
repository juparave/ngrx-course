
export interface Course {
  id: number;
  seqNo:number;
  url:string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}


// convenience function to compare courses by 
// a custom sequential number
export function compareCourses(c1:Course, c2: Course) {

  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
