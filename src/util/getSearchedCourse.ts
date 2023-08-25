import { COURSE_LIST } from '../constants';
import { Course } from '../common/domain/coursesType';

export const getSearchedCourse = (searchedText: string): Course[] | null => {
  console.log(searchedText);
  const searchedCourse = COURSE_LIST.filter(
    (course: Course) =>
      course.id.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()) ||
      course.title.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())
  );

  if (searchedCourse) {
    return searchedCourse;
  }
  return null;
};
