import React, { Component } from 'react'
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Show from './Show';

class Shows extends Component {
    render() {
        const shows = this.props.shows.map( (show, i) => <Show key={i} id={show.id} title={show.title} status={show.status} release_date={show.release_date} seasons={show.seasons}  description={show.description} image={show.image} />)
        return (
            <div>
                
                <Row className="justify-content-md-center">
                    <h2> Shows </h2>
                </Row>
                <CardDeck>
                    { shows }

                </CardDeck>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
         shows: state.shows
    }
}

export default connect(mapStateToProps)(Shows);
