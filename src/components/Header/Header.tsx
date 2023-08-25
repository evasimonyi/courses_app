import Button from 'src/common/Button';
import Logo from './Logo';
import './header.scss';
import { LOGOUT_BUTTON_TEXT } from 'src/constants';

const Header = () => (
  <header>
    <Logo imageSrc={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
    <Button buttonText={LOGOUT_BUTTON_TEXT} />
  </header>
);

export default Header;
