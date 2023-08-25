import './button.scss';

interface ButtonProps {
  buttonText: string;
  handleClick?: () => void;
}

const Button = ({ buttonText, handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
