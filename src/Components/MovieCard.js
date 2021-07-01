import React from 'react'
import { Card } from 'react-bootstrap'

const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '18rem', margin:"30px auto" }} >
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <h3 > {movie.rate} </h3>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
