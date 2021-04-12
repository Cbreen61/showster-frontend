import React, { Component } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addShow } from '../actions/shows';

class ShowsForm extends Component {
    state = {
        title: "",
        status: "",
        release_date: "",
        seasons: "",
        likes: "",
        dislikes: "",
        description: "",
        image: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addShow(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <h3>Add New Show </h3>
                <Form onSubmit={ this.handleSubmit }>
                    <Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter show status" id="status" name="status" value={ this.state.status } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridRelease_date">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="date" id="release_date" name="release_date" value={ this.state.release_date } onChange={ this.handleChange } />
                    </Form.Group>

                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridSeasons">
                        <Form.Label>Seasons</Form.Label>
                        <Form.Control type="number" placeholder="number of seasons" id="seasons" name="seasons" value={ this.state.seasons } onChange={ this.handleChange } />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Link" id="image" name="image" value={ this.state.image } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}  id="description" name="description" value={ this.state.description } onChange={ this.handleChange } />
                    </Form.Group>
                    </Row>
                    <Button variant="secondary" type="submit">
                        Add Show
                    </Button>
                </Form>
            </div>
            
        )
    }
}

export default connect(null,{ addShow })(ShowsForm);
