import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import Character from './Character'
import CharactersForm from './CharactersForm'

class Characters extends Component {
    render() {
        return (
            <div>
                <CharactersForm show={this.props.show}/>
                <br></br>
                <Container>
                    <Character characters={this.props.show && this.props.show.characters}/>
                </Container>
                
            </div>
        )
    }
}

export default Characters