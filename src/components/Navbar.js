import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';


class Navigationbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/">Showster</Navbar.Brand>
                <Nav className="mr-auto" >
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/shows">Shows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/shows/new">Add New Show</Nav.Link>
                </Nav.Item>
                </Nav>
                </Navbar>
                <br></br>
            </div>
        )
    }
}

export default Navigationbar
