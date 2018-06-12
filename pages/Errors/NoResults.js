import React from "react";
import { Link } from '../../routes.js';

const NotFound = ({searchData}) =>  {
    return (
        <div>
            <h1>No results found</h1>
            <Link route="search">
                <button>Please try again. </button>
            </Link>
        </div>
    );
}

export default NotFound;