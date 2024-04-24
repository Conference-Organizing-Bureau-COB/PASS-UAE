import React from 'react'
import background from '../../images/BGs/5.jpg'
import { Container, Row, Col } from 'react-bootstrap';
const bg = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%', // Adjust to cover full width and height
    backgroundRepeat: 'no-repeat',
    width: '100%', // Use vw unit for viewport width
    height: '100vh' // Adjust height as needed
}
const Accomodation = () => {
    return (
        <Container fluid style={bg} id='accommodation'>
            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase  text-center about-text p-2 fw-bold'><span className=' text-decoration-underline fw-bold'>Acc</span>omodation</h3>
            </div>
            <Col className='pt-4'>
                <div className="mt-5">
                    <h2 className='text-center text-light fw-bold pt-5' style={{ fontSize: '120px' }}>Stay Tuned</h2>
                </div>
            </Col>
        </Container>
    )
}

export default Accomodation