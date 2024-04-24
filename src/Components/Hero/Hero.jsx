import React from 'react';
import background from '../../images/BGs/1.jpg';
import conferenceTitle from '../../images/Conference-Title.png'
import Counter from '../Counter/Counter';
import { Container, Row, Col } from 'react-bootstrap';
const Hero = () => {
    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 650px', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '600px', // Adjust height as needed
    };

    return (<>
        <Container fluid style={containerStyle} id='home'>
            <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={4} lg={8} className='mt-5 pt-4'>
                    <img src={conferenceTitle} className='img-fluid mt-5 pt-5 px-4' alt='PanArab Logo' />
                </Col>
            </Row>

            <Row>

                <Col xs={12} sm={8} md={8} lg={9} className='d-flex px-auto flex-row justify-content-evenly gap-5'>
                    <h4 className='text-light mt-3 ps-4'>24-26 January 2025</h4>
                    <h4 className='text-light mt-3 '>Ritz-Carlton (DIFC) Dubai, UAE</h4>
                </Col>
            </Row>

            <Container fluid>
                <Row className='d-flex gap-3'>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={12} sm={12} md={12} lg={6} className='mt-5'>
                        <Counter />
                    </Col>
                </Row>
            </Container>
        </Container >
    </>
    );
};

export default Hero;
