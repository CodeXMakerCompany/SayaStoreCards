import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/theme";

import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../actions/modal.actions";
import { openSnackBar } from "../../actions/snackbar.actions";

//Styles
import { navBarStyles } from "../react-material-styles/styles";

//Main components
import { TemporaryDrawer } from "./leftNavBar.global";

//Modules components
import { HomeIndex } from "../modules/home/home.index";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const NavbarGlobal = (props) => {
  const dispatch = useDispatch();
  const classes = navBarStyles();

  const [themeSelection, setThemeSelection] = useState("light");
  const changeTheme = () => {
    if (themeSelection === "dark") {
      dispatch(
        openSnackBar({
          status: true,
          type: "success",
          message: "Blink blink sunshine 🌟",
        })
      )
    }
    return themeSelection === "light"
      ? (setThemeSelection("dark"),
        dispatch(
          openSnackBar({
            status: true,
            type: "success",
            message: "So you choosed the dark side 🌒",
          })
        ))
      : themeSelection === "dark"
      ? setThemeSelection("light")
      : null;
  };

  const HandleModal = () => {
    dispatch(toggleModal({ type: "testing" }));
  };

  const HandleSnackBar = () => {
    dispatch(
      openSnackBar({
        status: true,
        type: "success",
        message: "This is a succes item",
      })
    );
  };

  const icon =
    themeSelection === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} className={classes.root} >
        <AppBar>
          <Toolbar>
            <TemporaryDrawer specialClass={classes.button} />

            <Typography variant="h6" className={classes.title}>Codex Creations</Typography>
            <div
              onClick={changeTheme}
              style={{ color: themes[themeSelection].titleColor }}
            >
              {icon}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <ThemeProvider theme={themes[themeSelection]}>
        <div
          style={{
            height: "100vh",
            backgroundColor: themes[themeSelection].pageBackground,
            transition: "all .5s ease",
            color: themes[themeSelection].titleColor,
          }}
        >
          <Box>
            {props.view === "/"
              ? <HomeIndex className="m-0" />
              : "not found baby"}
          </Box>
          <div>
            <button onClick={() => HandleModal()}>click me</button>
          </div>
          <div>
            <button onClick={() => HandleSnackBar()}>snack bar</button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
