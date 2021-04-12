import React, { Component } from 'react'
import { Row } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                <h2>About this Site</h2>
                <p>This website is a place to look up information about your favorite shows, give them a thumbs up or down and add characters we may have missed.</p>
                </Row>
                
            </div>
        )
    }
}

export default About
