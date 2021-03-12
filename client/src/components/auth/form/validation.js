const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  } else if (values.email.includes(values.username)) {
    errors.email = 'Email cannot be the same as your username.';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.avatar) {
    errors.avatar = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/.test(values.password)
  ) {
    errors.password =
      'Must have at least 6 characters, contain at least one capital letter, and one number. ';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Your password does not match';
  }

  return errors;
};

export default validate;
