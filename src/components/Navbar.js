import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav className="justify-content-center" variant="pills" defaultActiveKey="">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about" href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/shows">Shows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/shows/new">Add New Show</Nav.Link>
                </Nav.Item>
                </Nav>
                
            </div>
        )
    }
}

export default Navbar
