import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/common/Button';
import Input from 'src/common/Input';
import { REGISTRATION_BUTTON_TEXT } from 'src/constants';
import '../../App.scss';
import '../../common/styles/_common_styles.scss';
import './registration.scss';
import ErrorMessage from 'src/common/ErrorMessage';

const Registration = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formValuesValidity, setFormValuesValidity] = useState({
    name: true,
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
      name: isFieldValid(formValues.name),
      password: isFieldValid(formValues.password),
    });

    return (
      isFieldValid(formValues.email) &&
      isFieldValid(formValues.name) &&
      isFieldValid(formValues.password)
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid()) {
      navigate('/login');
    }
  };

  return (
    <main className="user-form">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="cardStyle">
        <Input
          value={formValues.name}
          id="registration-name"
          name="name"
          type="text"
          placeholder="Name"
          handleOnChange={handleChange}
          style={{ height: '3em' }}
        />
        {!formValuesValidity.name && <ErrorMessage text="Name" />}
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

        <Button buttonText={REGISTRATION_BUTTON_TEXT} style={{ marginLeft: 'auto' }} />

        <p>
          If you have an account, please{' '}
          <span>
            <Link to="/login">login</Link>
          </span>
        </p>
      </form>
    </main>
  );
};

export default Registration;
