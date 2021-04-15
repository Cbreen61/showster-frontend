import React from 'react'
import { Link } from 'react-router-dom'


const Shows = (props) => {

    return (
        <div>
            {props.shows.map(show =>
                <li key={show.id}>
                    <Link to={`/shows/${show.id}`}>{show.title}</Link>
                </li> )}
        </div>
    )
}

export default Shows
