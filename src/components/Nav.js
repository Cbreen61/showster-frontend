import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shows">Shows</Link></li>
                    <li><Link to="/shows/new">Add New Show </Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
