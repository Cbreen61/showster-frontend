import React, { Component } from 'react'

class Show extends Component {
    render() {
        const { title, status, release_date, seasons, likes, dislikes, description, image } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <img src={ image }></img>
                <p>Description: { description }</p>
                <li>Status: { status }</li>
                <li>Release Date: { release_date }</li>
                <li> Seasons: { seasons }</li>
                <li>Likes: { likes }</li>
                <li>Dislikes: { dislikes }</li>


            </div>
        )
    }
}

export default Show
