import './input.scss';

type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props: InputProps) => {
  const { value, handleOnChange, ...restProps } = props;

  return (
    <input
      className="common-input-field"
      type="text"
      value={value}
      onChange={handleOnChange}
      {...restProps}
    />
  );
};

export default Input;
