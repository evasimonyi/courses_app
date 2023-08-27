import '../common/errorMessage.scss';

const ErrorMessage = (props: { text: string }) => {
  const { text } = props;
  return <p className="error">{text} is required</p>;
};

export default ErrorMessage;
