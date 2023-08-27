import CourseCard from './CourseCard/CourseCard';
import { Course } from '../../common/domain/coursesType';
import './courses.scss';

const Courses = (props: { setSelectedCourse: (course: Course) => void; courses: Course[] }) => {
  const { setSelectedCourse, courses } = props;

  return (
    <section className="courses-container">
      {courses.map((course: Course) => (
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
