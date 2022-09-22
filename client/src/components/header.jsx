import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ContextTheme } from "./ContextTheme";

function Header(){
    const balanceContext = useContext(ContextTheme);
    console.log(balanceContext)

    const changeColor = () => { 
        const resultado = balanceContext.theme === 'dark' ? 'light' : 'dark';
        console.log(resultado + " evento")
        setColorTheme(resultado);
        balanceContext.toglleTheme(resultado)
    }

    const[colorTheme, setColorTheme] = useState(balanceContext.theme);
    console.log(colorTheme + " Nuevo valor")
    
    return(
        <React.Fragment>
            <div className="header-title"  id={colorTheme === 'dark' ? 'dark' : 'light'}>
                <div className="header-title-container1">
                    <p>Where in the wold?</p>
                </div>
                <div className="header-title-container2">
                    <FontAwesomeIcon icon={faMoon} onClick={changeColor}/>    
                    <p onClick={changeColor} >Dark Mode</p>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;