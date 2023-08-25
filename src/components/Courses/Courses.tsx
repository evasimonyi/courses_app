import { COURSE_LIST } from '../../constants';
import CourseCard from './CourseCard/CourseCard';
import { Course } from '../../common/domain/coursesType';
import { Author } from '../../common/domain/authorsType';
import './courses.scss';

const Courses = (props: {
  setSelectedCourse: (course: Course) => void;
  courses: Course[];
  authors: Author[];
}) => {
  const { setSelectedCourse } = props;
  return (
    <section className="courses-container">
      {COURSE_LIST.map((course: Course) => (
        <CourseCard
          course={course}
          key={course.id}
          setSelectedCourse={() => setSelectedCourse(course)}
        />
      ))}
    </section>
  );
};

export default Courses;
