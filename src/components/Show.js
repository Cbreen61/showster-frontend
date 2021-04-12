import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Show extends Component {
    render() {
        const {  title, status, release_date, seasons, description, image, characters } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <img src={ image } alt=""></img>
                <p>Description: { description }</p>
                <li>Status: { status }</li>
                <li>Release Date: { release_date }</li>
                <li> Seasons: { seasons }</li>
                <li> Characters: { characters }</li>


            </div>
        )
    }
}

export default Show
