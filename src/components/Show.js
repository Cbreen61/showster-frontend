import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Show extends Component {
    render() {
        const { id, title, status, release_date, seasons, likes, dislikes, description, image } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <img src={ image } alt=""></img>
                <p>Description: { description }</p>
                <li>Status: { status }</li>
                <li>Release Date: { release_date }</li>
                <li> Seasons: { seasons }</li>
                <li>Likes: { likes }</li>
                <li>Dislikes: { dislikes }</li>
                <Link to={`/shows/${id}/characters`}>characters</Link>


            </div>
        )
    }
}

export default Show
