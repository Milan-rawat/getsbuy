import React from "react";
import { Link } from "react-router-dom";

import classes from "./Signup.module.css";

import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Signup = () => {
  return (
    <div className={classes.signupPage}>
      <div className={classes["signup-form-container"]}>
        <div className={classes.formHeader}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <p className={classes.pageHeading}>Sign up</p>
        </div>
        <form className={classes.form}>
          <div className={classes["signup-form"]}>
            <div className={`${classes["form-group"]} ${classes["fn-input"]}`}>
              <input
                className={classes["form-control"]}
                type="text"
                id="firstNameInput"
                placeholder=" "
              />
              <label className={classes["form-label"]} htmlFor="firstNameInput">
                First Name *
              </label>
            </div>
            <div className={`${classes["form-group"]} ${classes["ln-input"]}`}>
              <input
                className={classes["form-control"]}
                type="text"
                id="lastNameInput"
                placeholder=" "
              />
              <label className={classes["form-label"]} htmlFor="lastNameInput">
                Last Name *
              </label>
            </div>
            <div className={`${classes["form-group"]} ${classes["em-input"]}`}>
              <input
                className={classes["form-control"]}
                type="text"
                id="emailInput"
                placeholder=" "
              />
              <label className={classes["form-label"]} htmlFor="emailInput">
                Email Address *
              </label>
            </div>
            <div className={`${classes["form-group"]} ${classes["pw-input"]}`}>
              <input
                className={classes["form-control"]}
                type="text"
                id="passwordInput"
                placeholder=" "
              />
              <label className={classes["form-label"]} htmlFor="passwordInput">
                Password *
              </label>
            </div>
          </div>
          <div className={classes["form-actions-container"]}>
            <div className={classes["form-action-container"]}>
              <button className={classes["form-action"]} type="submit">
                SIGN UP
              </button>
            </div>
            <div className={classes["form-action-container"]}>
              <p className={classes["form-action"]}>
                <Link to="/signin">Already have an account? Signin</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <p className={classes["signup-page-footer"]}>
        Copyright &copy; Getsbuy.com {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Signup;
