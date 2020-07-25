import React, { useState } from 'react';
import classes from './header.module.css'


const Header = () => {


    const [displayDropDown, setDisplayDropDown] = useState(false);

    const dropDownToggleHandler = () => setDisplayDropDown(!displayDropDown)

    return (
        <div className={classes.container}>
            <div className={classes.Logo}
            >Logo</div>
            <div className={classes.NavList}>
                <ul>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                </ul>
                <div onClick={dropDownToggleHandler} className={classes.dropDown}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {displayDropDown ?
             <div className={classes.Drawer}>
                <ul>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                    <li>elements</li>
                </ul>
            </div> : null}
        </div>
    )
}

export default Header