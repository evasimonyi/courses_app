import { Course } from '../../common/domain/coursesType';
import Button from '../../common/Button';
import { getAuthorsNameOfCourse } from '../../util/getAuthor';
import '../Courses/CourseCard/CourseCard';
import './courseInfo.scss';
import '../../App.scss';
import '../Courses/CourseCard/courseCard.scss';

const CourseInfo = (props: {
  course: Course;
  setSelectedCourse: (course: Course | null) => void;
}) => {
  const { course, setSelectedCourse } = props;

  const authorNames = getAuthorsNameOfCourse(course);

  return (
    <main>
      <div className="course-info-container">
        <h1>{course.title}</h1>
        <div className="course-info-card">
          <h2>Description</h2>
          <div className="course-info-content">
            <div>
              <p>{course.description}</p>
            </div>
            <div className="divider"></div>
            <div className="course-card-content">
              <dl>
                <dt>ID:</dt>
                <dt>{course.id}</dt>
              </dl>
              <dl>
                <dt>Duration:</dt>
                <dt>{course.duration}</dt>
              </dl>
              <dl>
                <dt>Created:</dt>
                <dt>{course.creationDate}</dt>
              </dl>
              <dl>
                <dt>Authors:</dt>
                {course.authors.length > 0 && (
                  <dt id="author-list">{authorNames.join(', ')}</dt>
                )}
                {!(course.authors.length > 0) && <dt>Unknown</dt>}
              </dl>
            </div>
          </div>
        </div>
        <div>
          <Button
            buttonText="back"
            handleClick={() => setSelectedCourse(null)}
          />
        </div>
      </div>
    </main>
  );
};

export default CourseInfo;
