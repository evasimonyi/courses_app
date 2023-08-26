import Button from 'src/common/Button';
import './emptyCourseList.scss';

const EmptyCourseList = () => {
  return (
    <section className="empty-courelist">
      <h1>Your list is empty.</h1>
      <p>Please use 'Add new course' button to add your first course.</p>
      <Button buttonText="Add new course" />
    </section>
  );
};

export default EmptyCourseList;
