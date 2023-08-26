import './input.scss';

type InputProps = {
  value: string;
  setValue: (value: string) => void;
};

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props: InputProps) => {
  const { value, setValue, ...restProps } = props;

  return (
    <input
      className="common-input-field"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...restProps}
    />
  );
};

export default Input;
