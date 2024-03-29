import React, { useState } from 'react';
import classes from './Header.module.css';
import { Backdrop, SideDrawer } from '../Drawer/SideDrawer';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawerMenu = () => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const closeDrawerMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <section className={classes.topNavBar}>
        <div className={classes.leftTopNav}>
          {menuOpen && <Backdrop onCloseMenu={closeDrawerMenu} />}
          <SideDrawer openMenu={menuOpen} />
          <IconButton onClick={toggleDrawerMenu}>
            <MenuIcon className={classes.topNavButton} />
          </IconButton>
          <div className={classes.applicationTitle}>Getsbuy</div>
        </div>
        <div className={classes.rightTopNav}>
          <Link to="/signin">
            <IconButton>
              <AccountCircle className={classes.topNavButton} />
            </IconButton>
          </Link>
          <IconButton>
            <ShoppingCartIcon className={classes.topNavButton} />
          </IconButton>
        </div>
      </section>
      <section className={classes.botNavBar}>
        <div className={classes.searchInputBox}>
          <input
            placeholder="Search…"
            className={classes.searchInput}
            type="text"
          />
          <div className={classes.searchIconBox}>
            <SearchIcon className={classes.searchIcon} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
