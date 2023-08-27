import './button.scss';

interface ButtonProps {
  buttonText: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLInputElement>> = (props: ButtonProps) => {
  const { buttonText, handleClick, ...restProps } = props;

  return (
    <button onClick={handleClick} {...restProps}>
      {buttonText}
    </button>
  );
};

export default Button;
