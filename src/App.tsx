import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import SearchBar from './components/Courses/SearchBar/SearchBar';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/Courses/EmptyCourseList';
import { COURSE_LIST, AUTHOR_LIST } from './constants';
import { Course } from './common/domain/coursesType';
import './App.scss';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchedCourse, setSearchedCourse] = useState<string>('');

  console.log(searchedCourse);

  return (
    <>
      <Header />
      {COURSE_LIST.length === 0 && <EmptyCourseList />}
      {COURSE_LIST.length > 0 &&
        (selectedCourse ? (
          <CourseInfo
            course={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
        ) : (
          <main>
            <div className="dashboard">
              <SearchBar
                searchedCourse={searchedCourse}
                setSearchedCourse={setSearchedCourse}
              />
              <Courses
                courses={COURSE_LIST}
                authors={AUTHOR_LIST}
                setSelectedCourse={setSelectedCourse}
              />
            </div>
          </main>
        ))}
    </>
  );
}

export default App;
