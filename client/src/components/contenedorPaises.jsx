import React from "react";
import {Link} from "react-router-dom"

function ContenedorPaises(props){
    const{name, population, region, capital, image, theme} = props;
    return(
        <React.Fragment>
            <div className="body-general">
                <div className="card" id={theme === 'dark' ? 'dark' : 'light'}>
                    <div className="card-img">
                    <Link to={"/search/"+name}>
                        <img src={image} alt=""/>
                    </Link>
                    </div>
                    <div className="card-description">
                        <p className="title">{name}</p>
                        <p>Population : {population}</p>
                        <p>Region : {region}</p>
                        <p>Capital : {capital}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContenedorPaises;