import React from "react";
import { Link } from "react-router-dom";

function Back() {
    return(
        <React.Fragment>
            <div className="container-back">
                <Link to="/">
                    <button className="back"> ← Back</button>
                </Link>
            </div>
        </React.Fragment>

    )
}

export default Back;