import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class Show extends Component {
    render() {
        const {  title, status, release_date, seasons, description, image } = this.props;
        return (
            <div>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={ image } alt="" />
                    <Card.Body>
                        <Card.Title>{ title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ status }</Card.Subtitle>
                        <Card.Text>
                            { description }
                        </Card.Text>
                    </Card.Body>
                    <footer className="text-muted">
                        Seasons: { seasons }
                        <br></br>
                        Release Date: { release_date }  
                    </footer>
                </Card>
                <br></br>
            </div>
        )
    }
}

export default Show
