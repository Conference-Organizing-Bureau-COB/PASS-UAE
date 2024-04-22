import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../images/BGs/6.jpg'
import './Newsletter.css'

const bg = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%', // Adjust to cover full width and height
    backgroundRepeat: 'no-repeat',
    width: '100%', // Use vw unit for viewport width
    height: '50%' // Adjust height as needed
}


const Newsletter = () => {

    return (
        <Container fluid style={bg} className='py-5'>
            <Row className='pt-4'>
                < Col xs={612} sm={12} md={6} lg={6} >
                    <p className='span text-center ' style={{ color: "gold", letterSpacing: "5px" }}>Get the latest Info about the event</p>
                    <h1 className='text-light text-uppercase text-center fw-bold '>Subscribe Newsletter</h1>
                </Col >
                <Col xs={12} sm={12} md={6} lg={5} className="py-4">
                    <div className="input-group ">
                        <input type="email"
                            className="form-control form-control-lg text-start custom-shadow"
                            id="exampleFormControlInput1"
                            placeholder="Type your email address"
                            style={{ borderRadius: "25px 0 0 25px" }} />
                        <span>
                            <button type="button" className="btn btn-lg text-uppercase text-light custom-shadow" style={{ backgroundColor: "gold", borderRadius: "0 25px 25px 0" }}>Submit</button>
                        </span>
                    </div>
                </Col>
            </Row >
        </Container >
    )
}

export default Newsletter;