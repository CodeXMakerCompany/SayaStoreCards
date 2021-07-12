import React from 'react'
import { marginPaddingZero } from "../../react-material-styles/styles";
import { HomeContentLoader } from "../../react-content-loader/home.content.loader";
export const HomeIndex = () => {
    const classes = marginPaddingZero();
    return (
        <div>
            <h3 className={classes.root}>This is the home index</h3>
            <HomeContentLoader />
            <p>Lets test a formulary</p>
        </div>
    )
}
