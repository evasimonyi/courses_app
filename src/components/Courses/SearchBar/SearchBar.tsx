import { useEffect, useState } from 'react';
import Button from 'src/common/Button';
import Input from '../../../common/Input';
import './searchbar.scss';
import { getSearchedCourse } from 'src/util/getSearchedCourse';
import { Course } from 'src/common/domain/coursesType';
import { COURSE_LIST, SEARCH_BUTTON_TEXT } from '../../../constants';

const SearchBar = (props: {
  coursesToDisplay: Course[] | null;
  setCoursesToDisplay: (value: Course[]) => void;
}) => {
  const { setCoursesToDisplay } = props;
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    console.log(searchedText);
    if (searchedText === '') {
      setCoursesToDisplay(COURSE_LIST);
    }
  }, [searchedText]);

  const handleSearch = () => {
    if (searchedText.length > 0) {
      const coursesToDisplay = getSearchedCourse(searchedText);
      if (coursesToDisplay) {
        setCoursesToDisplay(coursesToDisplay);
      }
    }
  };

  return (
    <div className="searchbar">
      <Input
        value={searchedText}
        handleOnChange={(event) => setSearchedText(event.target.value)}
        style={{ width: '50%', padding: '0 1em' }}
        placeholder="Search for course"
      />
      <Button buttonText={SEARCH_BUTTON_TEXT} handleClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
