import React from "react";
import { Link } from "react-router-dom";

import classes from "./Signin.module.css";

import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Signin = () => {
  return (
    <div className={classes.signinPage}>
      <div className={classes["signin-form-container"]}>
        <div className={classes.formHeader}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <p className={classes.pageHeading}>Sign in</p>
        </div>
        <form className={classes.form}>
          <div className={classes["signup-form"]}>
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
                SIGN IN
              </button>
            </div>
            <div className={classes["form-action-container"]}>
              <p className={classes["form-action"]}>
                <Link to="/forget-password">Forget Password</Link>
                <Link to="/signup">Don't have an account? Signup</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <p className={classes["signin-page-footer"]}>
        Copyright &copy; Getsbuy.com {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Signin;
