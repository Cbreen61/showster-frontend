import React, { Component } from 'react'
import { Row } from 'react-bootstrap';

class Error extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <h3>Danger! Danger! Mistakes were made!! This is not a real link </h3>
                </Row>
    
            </div>
        )
    }
}

export default Error
