import React from 'react';

import classes from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationtItems";
import DrawerToggle from "../SideDrawer/DrowerToggle/DrowerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth}/>
    </nav>
  </header>
);

export default toolbar;