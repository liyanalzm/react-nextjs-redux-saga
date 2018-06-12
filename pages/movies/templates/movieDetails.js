import React from 'react'
import NoResults from '../../Errors/NoResults'
import SomethingWrong from '../../Errors/SomethingWrong'
export default function ({ show, error }) { 
    return (
        <div>
            {error &&
                <SomethingWrong error={error} />
                || show.length <= 0 &&
                <NoResults />
                ||
                <div>
                    <h1>{show.name}</h1>
                    <p>{show.summary.replace(/<[\/]?p>/g, '')}</p>
                    {show.image &&
                        <img src={show.image.medium} />
                        ||
                        <p> No image found.</p>
                    }
                </div>
            }
        </div>
    )
}
