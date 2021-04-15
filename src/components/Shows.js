import React from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Shows = (props) => {

    return (
        <Nav variant="pills" className="flex-column">
            <br></br>
            {props.shows.map(show =>
                <li key={show.id}>
                    <Nav.Link href={`/shows/${show.id}`}>{show.title}</Nav.Link>
                </li> )}
        </Nav>
    )
}

export default Shows
