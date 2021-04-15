import React, { Component } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/character';

class CharactersForm extends Component {

    state = {
        name: "",
        status: "",
        species: "",
        description: "",
        image: "",
        show_id: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addCharacter(this.state, this.props.show.id)
        this.setState({
            name: "",
            status: "",
            species: "",
            description: "",
            image: "",
            show_id: ""
        })
    }

    render() {
        return (
            <div>
                <h3>Add Character </h3>
                <Form onSubmit={ this.handleSubmit }>
                    <Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="name" value={ this.state.name } onChange={ this.handleChange } />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter show status"  name="status" value={ this.state.status } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridSpecies">
                        <Form.Label>Species</Form.Label>
                        <Form.Control type="text"  name="species" value={ this.state.species } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Control type="hidden"  name="show_id" defaultValue={this.props.show.id} onChange={ this.handleChange } />

                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Link"  name="image" value={ this.state.image } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}  name="description" value={ this.state.description } onChange={ this.handleChange } />
                    </Form.Group>
                    </Row>
                    <Button variant="secondary" type="submit">
                        Add Character
                    </Button>
                </Form>
                <br></br>
            </div>
            
        )
    }
}

export default connect(null,{ addCharacter })(CharactersForm);
