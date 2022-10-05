import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header( { onClick , theme} ){

    return(
        <React.Fragment>
            <div className="header-title"  id={ theme ? 'dark' : 'light'}>
            <div className="header-title-container1">
                    <p>Where in the wold?</p>
                </div>
                <div className="header-title-container2">
                    <FontAwesomeIcon icon={faMoon} onClick={onClick}/>
                    <p onClick={onClick} >Dark Mode</p>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;