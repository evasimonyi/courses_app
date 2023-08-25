import { Course } from '../../../common/domain/coursesType';
import Button from '../../../common/Button';
import { getAuthorsNameOfCourse } from '../../../util/getAuthor';

import './courseCard.scss';

const CourseCard = (props: {
  course: Course;
  setSelectedCourse: () => void;
}) => {
  const { course, setSelectedCourse } = props;
  const authorNames = getAuthorsNameOfCourse(course);

  return (
    <div className="course-card-container">
      <div className="colored-line"></div>
      <h1>{course.title}</h1>
      <div className="course-card-content">
        <div>
          <p>{course.description}</p>
        </div>
        <div>
          <div>
            <dl>
              <dt>Authors:</dt>
              {course.authors.length > 0 && (
                <dt id="author-list">{authorNames.join(', ')}</dt>
              )}
              {!(course.authors.length > 0) && <dt>Unknown</dt>}
            </dl>
            <dl>
              <dt>Duration:</dt>
              <dt>{course.duration}</dt>
            </dl>
            <dl>
              <dt>Created:</dt>
              <dt>{course.creationDate}</dt>
            </dl>
          </div>
          <div>
            <Button
              buttonText="show course"
              handleClick={setSelectedCourse}
              style={{ width: 'fit-content' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
