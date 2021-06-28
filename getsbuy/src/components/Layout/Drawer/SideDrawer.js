import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

import RippleEffect from "../../UX/RippleEffect";

import { Link } from "react-router-dom";

export const Backdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onCloseMenu} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export const SideDrawer = (props) => {
  let drawerClasses = "sideDrawer";
  if (props.openMenu) {
    drawerClasses = "sideDrawer open";
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={drawerClasses}>
          <RippleEffect>
            <div className="profile">
              <div className="profile__picture">
                <img
                  id="myDP"
                  src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                  alt="myDP"
                />
              </div>
              <div className="profile__detail">
                <h4>My Name</h4>
                <span>myemail@email.com</span>
              </div>
            </div>
          </RippleEffect>
          <div className="navActions">
            <ul>
              <RippleEffect>
                <Link
                  to={{
                    pathname: "/home",
                  }}
                >
                  <li>Home</li>
                </Link>
              </RippleEffect>
              <RippleEffect>
                <li>Account</li>
              </RippleEffect>
              <RippleEffect>
                <li>Orders</li>
              </RippleEffect>
              <RippleEffect>
                <li>Wishlist</li>
              </RippleEffect>
              <RippleEffect>
                <li>My Cart</li>
              </RippleEffect>
              <RippleEffect>
                <li>Customer service</li>
              </RippleEffect>
              <RippleEffect>
                <li>About us</li>
              </RippleEffect>
              <RippleEffect>
                <li>Contact us</li>
              </RippleEffect>
            </ul>
            <div className="logoutBtn">Logout</div>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
