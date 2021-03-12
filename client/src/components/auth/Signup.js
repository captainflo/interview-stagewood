import React from 'react';
import renderField from './form/renderField';
import renderFieldPic from './form/renderFieldPic';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import validate from './form/validation';

const Signup = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);
  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    props.signup(value, () => {
      props.history.push('/dashboard');
    });
  };

  return (
    <div className="row no-gutters">
      <div className="col-md-7">
        <div className="wrapper-auth-image">
          <img
            src={process.env.PUBLIC_URL + '/images/teamwork.jpg'}
            alt="background"
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <h2>
              Sigup <i className="fas fa-sign-in-alt"></i>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
              />
              <Field
                name="name"
                type="text"
                component={renderField}
                label="name"
              />
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
              <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm Password"
              />
              <Field
                name="avatar"
                component={renderFieldPic}
                type="file"
                label="Picture"
              />
              <div>
                <div className="form-group">
                  {error ? <span className="text-danger">{error}</span> : ''}
                </div>
                <button
                  className="btn btn-primary shadow rounded btn-website"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'SignUpForm', validate })
)(Signup);
