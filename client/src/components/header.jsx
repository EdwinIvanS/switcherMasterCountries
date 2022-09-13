import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <React.Fragment>
            <div className="header-title">
                <div className="header-title-container1">
                    <p>Where in the wold?</p>
                </div>
                <div className="header-title-container2">
                    <FontAwesomeIcon icon={faMoon} />    
                    <p>Dark Mode</p>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;