import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["top-footer"]}>
        <div className={classes.topic}>
          <div className={classes.topicHead}>GET TO KNOW US</div>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Getsbuy Story</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className={classes.topic}>
          <div className={classes.topicHead}>NEED ANY HELP?</div>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={classes.topic}>
          <div className={classes.topicHead}>MAKE MONEY WITH US</div>
          <ul>
            <li>Sell on Getsbuy</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
        <div className={classes.topic}>
          <div className={classes.topicHead}>OUR POLICY</div>
          <ul>
            <li>Return Policy</li>
            <li>Term Of Use</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className={classes.mobileTopic}>
          <div className={classes.Side}>
            <ul>
              <li>Your Account</li>
              <li>Wish List</li>
              <li>Returns</li>
              <li>Customer Service</li>
              <li>Getsbuy Policy</li>
            </ul>
          </div>
          <div className={classes.Side}>
            <ul>
              <li>Your Orders</li>
              <li>Your Cart</li>
              <li>Getsbuy App Download</li>
              <li>Sell on Getsbuy</li>
              <li>Desktop App</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["bot-footer"]}>
        <p>
          Made by &nbsp;
          <a href="https://milan-rawat.github.io" target="blank">
            Milan Rawat
          </a>
        </p>
        &nbsp; | &nbsp;
        <p>Copyright &copy; Getsbuy {new Date().getFullYear()}</p>
        &nbsp; | &nbsp; Follow me on &nbsp;
        <a href="https://github.com/milan-rawat" target="blank">
          Github
        </a>
        &nbsp; | &nbsp;
        <a href="https://www.linkedin.com/in/milan-rawat" target="blank">
          LinkedIn
        </a>
        &nbsp; | &nbsp;
        <a href="https://twitter.com/milan8rawat" target="blank">
          Twitter
        </a>
        &nbsp; | &nbsp;
        <a href="https://instagram.com/milanrawat086" target="blank">
          Instagram
        </a>
        &nbsp; | &nbsp;
        <a href="https://www.facebook.com/milanrawat086" target="blank">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
