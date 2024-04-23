import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../images/BGs/1.jpg'

const Board = () => {
    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 650px', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '600px', // Adjust height as needed
    };
    return (
        <Container fluid style={bg}>

        </Container>
    )
}

export default Board