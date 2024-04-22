import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../images/BGs/3.jpg';

const Overview = () => {


    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 100vh', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '100vh '// Adjust height as needed
    };
    return (
        <Container fluid style={bg}>
            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase text-center fw-bold welcome-text p-2'><span className=' text-decoration-underline'>Ov</span>erview</h3>
            </div>
            <div className="container px-5 pt-4 content">
                <p className='fw-bold h5 text-uppercase' style={{ color: '#2E419D' }}>About Pass</p>

                <p className=' pt-2 content'>
                    With over 30 years' experience since being established in 1988, the Pan Arab Spine Society has
                    become a trusted leader in spine care education and research across the Middle East. Instrumental
                    in forming AOSpine Middle East in 2009, the Pan Arab Spine Society has spent the past 15 years
                    advancing AO methodologies for the region through their specialized expertise. Today, the Pan
                    Arab Spine Society continues building on their robust foundation to champion patient outcomes and
                    gold standards for spinal treatment.
                </p>
            </div>


        </Container>
    )
}

export default Overview