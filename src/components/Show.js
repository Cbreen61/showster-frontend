import React from 'react'
import { Card, Jumbotron } from 'react-bootstrap';
import Characters from './Characters';


const Show = (props) => {
    let show = props.shows[props.match.params.id -1]


    return (

            <div>
                <Jumbotron fluid>
                    <Card.Img variant="top" src={ show.image } alt="" />
                    <Card.Body>
                        <Card.Title>{ show.title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ show.status }</Card.Subtitle>
                        <Card.Text>
                            { show.description }
                        </Card.Text>

                    </Card.Body>
                    <footer className="text-muted">
                        Seasons: { show.seasons }
                        <br></br>
                        Release Date: { show.release_date }  
                    </footer>  
                </Jumbotron>
                <br></br>
                < Characters show={show}/>    

                
                
                

            </div>
    )


}

export default Show
