import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from './Signup.module.css';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Swal from 'sweetalert2';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/v1/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });
    const response = JSON.parse(await res.text());
    const resStatus = response.status.toUpperCase();
    const resMessage = response.message;
    if (response.status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${resMessage}`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/');
    }

    if (response.status === 'fail')
      Swal.fire(`${resStatus}`, `${resMessage}`, 'error');
  };
  return (
    <div className={classes.signupPage}>
      <div className={classes['signup-form-container']}>
        <div className={classes.formHeader}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <p className={classes.pageHeading}>Sign up</p>
        </div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes['signup-form']}>
            <div className={`${classes['form-group']} ${classes['fn-input']}`}>
              <input
                className={classes['form-control']}
                type="text"
                id="firstNameInput"
                placeholder=" "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className={classes['form-label']} htmlFor="firstNameInput">
                First Name *
              </label>
            </div>
            <div className={`${classes['form-group']} ${classes['ln-input']}`}>
              <input
                className={classes['form-control']}
                type="text"
                id="lastNameInput"
                placeholder=" "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label className={classes['form-label']} htmlFor="lastNameInput">
                Last Name *
              </label>
            </div>
            <div className={`${classes['form-group']} ${classes['em-input']}`}>
              <input
                className={classes['form-control']}
                type="text"
                id="emailInput"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={classes['form-label']} htmlFor="emailInput">
                Email Address *
              </label>
            </div>
            <div className={`${classes['form-group']} ${classes['pw-input']}`}>
              <input
                className={classes['form-control']}
                type="text"
                id="passwordInput"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className={classes['form-label']} htmlFor="passwordInput">
                Password *
              </label>
            </div>
          </div>
          <div className={classes['form-actions-container']}>
            <div className={classes['form-action-container']}>
              <button className={classes['form-action']} type="submit">
                SIGN UP
              </button>
            </div>
            <div className={classes['form-action-container']}>
              <p className={classes['form-action']}>
                <Link to="/signin">Already have an account? Signin</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <p className={classes['signup-page-footer']}>
        Copyright &copy; Getsbuy.com {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Signup;
