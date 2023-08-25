import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import SearchBar from './components/Courses/SearchBar/SearchBar';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/Courses/EmptyCourses/EmptyCourseList';
import { COURSE_LIST } from './constants';
import { Course } from './common/domain/coursesType';
import './App.scss';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [coursesToDisplay, setCoursesToDisplay] = useState<Course[]>(COURSE_LIST);

  return (
    <>
      <Header />
      {COURSE_LIST.length === 0 && <EmptyCourseList />}
      {COURSE_LIST.length > 0 &&
        (selectedCourse ? (
          <CourseInfo course={selectedCourse} setSelectedCourse={setSelectedCourse} />
        ) : (
          <main>
            <div className="dashboard">
              <SearchBar
                coursesToDisplay={coursesToDisplay}
                setCoursesToDisplay={setCoursesToDisplay}
              />
              <Courses courses={coursesToDisplay} setSelectedCourse={setSelectedCourse} />
            </div>
          </main>
        ))}
    </>
  );
}

export default App;
