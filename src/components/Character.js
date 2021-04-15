import React from 'react'
import { Card, CardDeck,  Col } from 'react-bootstrap';

const Character = (props) => {


    return (

    <CardDeck>
            { props.characters.map(character => 
                // <div key={character.id}>
                //     <img src={character.image}alt={character.name}></img>
                //     <h5>{character.name}</h5>  
                //     <li> {character.status}</li>
                //     <li>{character.species}</li>
                //     <p> {character.description} </p>
                // </div> 

                <Col className="container-fluid mt-3">
            <Card style={{ width: '20rem' }} key={character.id}>
              <Card.Img variant="top" src={character.image}alt={character.name} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                {character.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> Status: {character.status}<br></br>
                    Species/Power:{character.species} </small>
              </Card.Footer>
            </Card>
            </Col>            
            )}
        </CardDeck>

    )

}


export default Character