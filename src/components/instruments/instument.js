import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './instrument.css';
import Rating from 'react-rating';

const Instrument = (props) => {
    // destructuring
    const{ name,img,rating,price,details}=props.instrument;
    return(
        <div className="instrument">
            <div className="instrument-cards h-100">
            <Card  style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title ><h4 style={{ fontWeight:'bold' }}>{name}</h4> </Card.Title>
                <Card.Text>{details}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush fw-bold">
            <ListGroupItem className="">Rating: <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    />
                                    </ListGroupItem>  

            <ListGroupItem>Price: $ {price}</ListGroupItem>     
            </ListGroup>
            <Card.Body>
            <Button
            onClick={() => props.handleAddToCart(props.instrument)}
            variant="dark" style={{backgroundColor: "purple"}}> <FontAwesomeIcon icon={faMusic} /> Learn playing {name} </Button>{' '}
            </Card.Body>
            </Card>     
            </div>
        </div>
    )
    
};

export default Instrument;