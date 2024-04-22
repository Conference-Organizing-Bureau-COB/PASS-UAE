import React from 'react'
import background from '../../images/BGs/2.jpg';
import handClipboard from '../../images/hand-clipboard.png'
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'
const About = () => {

    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 650px', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '100% '// Adjust height as needed
    };
    return (
        <Container fluid style={bg}>

            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase  text-center about-text p-2 fw-bold'><span className=' text-decoration-underline fw-bold'>Abo</span>ut The Conference</h3>
            </div>

            <h4 className='text-uppercase fw-bold text-center mt-5 blue'>Attendee Profile</h4>

            <Container className='mt-5'>
                <Row className='d-flex flex-row justify-content-center '>
                    <Col xs={6} sm={3} md={3} lg={3}>
                        <ul className='list-unstyled blue'>
                            <li >Orthopedic</li>
                            <li >Spine Surgeons</li>
                            <li >Neurosurgery</li>
                            <li >Anaesthesia</li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3} md={3} lg={3}>
                        <ul className='list-unstyled blue'>
                            <li>Radiology</li>
                            <li>Internal Medicine</li>
                            <li>Pediatric</li>
                            <li>Endocrinology</li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3} md={3} lg={3}>
                        <ul className='list-unstyled blue' >
                            <li>Rheumatology</li>
                            <li>Oncology</li>
                            <li>Geriatric</li>
                            <li>Emergency</li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3} md={3} lg={3}>
                        <ul className='list-unstyled blue'>
                            <li>Physiotherapy Rehabilitation</li>
                            <li>Sports Medicine</li>
                            <li>Nurses Technicians</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center my-5'>
                        <img className='mt-5' src={handClipboard} width={'160px'} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About