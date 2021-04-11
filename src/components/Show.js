import React, { Component } from 'react'

class Show extends Component {
    render() {
        const { title, status, realease_date, seasons, likes, dislikes, description, image } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <li>{ status }</li>
                <li>{ realease_date }</li>
                <li>{ seasons }</li>
                <li>{ likes }</li>
                <li>{ dislikes }</li>
                <li>{ image }</li>
                <p>{ description }</p>
            </div>
        )
    }
}

export default Show
