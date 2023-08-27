import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/common/Button';
import Input from 'src/common/Input';
import { LOGIN_BUTTON_TEXT } from 'src/constants';
import '../../App.scss';
import '../../common/styles/_common_styles.scss';
import '../Registration/registration.scss';
import ErrorMessage from 'src/common/ErrorMessage';

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [formValuesValidity, setFormValuesValidity] = useState({
    email: true,
    password: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isFieldValid = (field: string) => field.length >= 2;

  const isFormValid = () => {
    setFormValuesValidity({
      email: isFieldValid(formValues.email),
      password: isFieldValid(formValues.password),
    });

    return isFieldValid(formValues.email) && isFieldValid(formValues.password);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid()) {
      navigate('/courses');
    }
  };

  return (
    <main className="user-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="cardStyle">
        <Input
          value={formValues.email}
          id="registration-email"
          name="email"
          type="text"
          placeholder="Email address"
          handleOnChange={handleChange}
          style={{ height: '3em' }}
        />
        {!formValuesValidity.email && <ErrorMessage text="Email" />}
        <Input
          value={formValues.password}
          id="registration-password"
          name="password"
          type="password"
          placeholder="Password"
          handleOnChange={handleChange}
          style={{ height: '3em' }}
        />
        {!formValuesValidity.password && <ErrorMessage text="Password" />}

        <Button buttonText={LOGIN_BUTTON_TEXT} style={{ marginLeft: 'auto' }} />
      </form>
    </main>
  );
};

export default Login;
