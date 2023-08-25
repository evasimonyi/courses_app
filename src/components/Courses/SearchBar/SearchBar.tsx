import { useEffect, useState } from 'react';
import Button from 'src/common/Button';
import Input from '../../../common/Input';
import './searchbar.scss';

const SearchBar = (props: {
  searchedCourse: string;
  setSearchedCourse: (value: string) => void;
}) => {
  const { setSearchedCourse } = props;
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    if (searchedText === '') {
      setSearchedCourse(null);
    }
  }, [searchedText]);

  return (
    <div className="searchbar">
      <Input
        value={searchedText}
        setValue={setSearchedText}
        style={{ width: '50%', padding: '0 1em' }}
      />
      <Button
        buttonText="Search"
        handleClick={() => setSearchedCourse(searchedText)}
      />
    </div>
  );
};

export default SearchBar;
