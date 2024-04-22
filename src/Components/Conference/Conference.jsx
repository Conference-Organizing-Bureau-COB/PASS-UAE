import React from 'react'
import background from '../../images/BGs/4.jpg'
import { Container, Row, Col } from 'react-bootstrap';
const Conference = () => {

    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 100%', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '100%' // Adjust height as needed
    }

    return (
        <Container fluid style={bg}>
            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase  text-center about-text p-2 fw-bold'><span className=' text-decoration-underline fw-bold'>Con</span>ference Topics</h3>
            </div>
            <Col className='text-center pt-4 pb-5'>
                <h5 className='text-light'>Al & New Innovations</h5>
                <h5 className='text-light'>Pediatric and Adolescent Spinal Deformity</h5>
                <h5 className='text-light'>Degenerative Spine & Motion</h5>
                <h5 className='text-light'>Preserving Deformity</h5>
                <h5 className='text-light'>Cervical and Lumbar Malalignment</h5>
                <h5 className='text-light'>Degenerative and Trauma</h5>
                <h5 className='text-light'>Cervical Myelopathy</h5>
                <h5 className='text-light'>Imaging and Trauma</h5>
                <h5 className='text-light'>OLIF / ATP Fusion Technology</h5>
                <h5 className='text-light'>Pain Management</h5>
                <h5 className='text-light'>Osteoporosis</h5>
                <h5 className='text-light'>Tumors</h5>
                <h5 className='text-light'>Research & Cadaveric Workshops</h5>
            </Col>
        </Container>
    )
}

export default Conference