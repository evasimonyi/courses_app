import { COURSE_LIST } from '../../constants';
import CourseCard from './CourseCard/CourseCard';
import { Course } from '../../common/domain/coursesType';
import './courses.scss';

const Courses = () => {
  return (
    <main>
      {COURSE_LIST.map((course: Course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </main>
  );
};

export default Courses;
