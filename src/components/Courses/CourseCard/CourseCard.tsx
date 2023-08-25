import { Course } from '../../../common/domain/coursesType';
import Button from '../../../common/Button';
import { AUTHOR_LIST } from '../../../constants';
import { getAuthorById } from '../../../util/getAuthor';

import './courseCard.scss';

const CourseCard = (props: { course: Course }) => {
  const { course } = props;

  const authors = course.authors.length
    ? course.authors.map((author) => getAuthorById(author, AUTHOR_LIST))
    : [];

  const authorNames = authors.map((author) => author.name);

  return (
    <section className='courseCardContainer'>
      <div className='colored-line'></div>
      <h1>{course.title}</h1>
      <div className='courseCardContent'>
        <div>
          <p>{course.description}</p>
        </div>
        <div>
          <div>
            <dl>
              <dt>Authors:</dt>
              {course.authors.length && (
                <dt id='authorList'>{authorNames.join(', ')}</dt>
              )}
              {!course.authors.length && <dt>Unknown</dt>}
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
            <Button buttonText='show course' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
