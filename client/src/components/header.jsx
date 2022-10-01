import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ContextTheme } from "./ContextTheme";
//import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header( { onClick , theme} ){
    const balanceContext = useContext(ContextTheme);
    console.log("valor del tema" + theme)

    /*const changeColor = () => { 
        const resultado = balanceContext.theme === 'dark' ? 'light' : 'dark';
        console.log(resultado + " evento")
        setColorTheme(resultado);
        balanceContext.toglleTheme(resultado)
    }
*/
    
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