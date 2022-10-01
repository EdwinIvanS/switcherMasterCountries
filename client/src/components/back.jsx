import React from "react";
import { Link } from "react-router-dom";

function Back({theme}) {
    return(
        <React.Fragment>
            <div className="container-back" id={theme ? 'dark' : 'light'}>
                <Link to="/">
                    <button className="back" id={theme ? 'dark' : 'light'}> ← Back</button>
                </Link>
            </div>
        </React.Fragment>

    )
}

export default Back;