import { Author } from '../common/domain/authorsType';
import { Course } from '../common/domain/coursesType';
import { AUTHOR_LIST } from '../constants';

export const getAuthorById = (id: string, authorlist: Author[]) => {
  const [author] = authorlist.filter((author) => id === author.id);
  return author;
};

export const getAuthorsOfCourse = (course: Course) => {
  return course.authors.length
    ? course.authors.map((author) => getAuthorById(author, AUTHOR_LIST))
    : [];
};

export const getAuthorsNameOfCourse = (course: Course) => {
  const authorsOfCourse = getAuthorsOfCourse(course);
  return authorsOfCourse.map((author) => author.name);
};
