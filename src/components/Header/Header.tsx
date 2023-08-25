import Button from 'src/common/Button';
import Logo from './Logo';
import './header.scss';

const Header = () => (
  <header>
    <Logo imageSrc={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
    <Button buttonText="Logout" />
  </header>
);

export default Header;
