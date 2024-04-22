import React, { useEffect, useState } from 'react'
import background from '../../images/BGs/2.jpg';
import Sameh from '../../images/dr pics/sameh.jpg'
import Oubaid from '../../images/dr pics/oubaid.jpg'
import Youssry from '../../images/dr pics/Youssry_Elhawary.jpg'
import './Welcome.css'
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {

    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 650px', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '100% '// Adjust height as needed
    };



    return (
        <Container fluid style={containerStyle}>
            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase text-center welcome-text p-2 fw-bold'><span className=' text-decoration-underline fw-bold'>Wel</span>come Message</h3>
            </div>

            <div className="container px-5 pt-4 content">
                <p className='fw-bold h5' style={{ color: '#2E419D' }}>Dear Esteemed Partners and Exhibitors,</p>
                <p>It is with great pleasure that we invite you to the 14th Pan Arab Spine Conference, a prestigious event organized by the Pan Arab Spine Society (PASS).
                    This remarkable conference will be held in Ritz-Carlton Dubai International Financial Centre (DIFC) Dubai, UAE on January 24 - 26, 2025.
                </p>
                <p >Dubai, a vibrant and dynamic city, has been chosen as the host for this exceptional gathering of the brightest pioneers in the field of spine care to create
                    a unique scientific, social, and entertaining event.
                </p>
                <p>
                    We are also honored to welcome prominent surgeons from the United States, Europe, Asia, Arab countries, and more, who will share their latest
                    scientific research, discoveries, and findings. Their contributions will undoubtedly contribute to further advancements in diagnosis, surgery, and
                    treatment techniques.
                </p>
                <p >
                    The conference will cover a wide range of topics, including Al & new innovations, Pediatric and Adolescent Spinal Deformity, Degenerative Spine and
                    Motion Preserving Deformity, Cervical and Lumbar Malalignment, Degenerative and Trauma, Cervical Myelopathy, Imaging and Trauma, OLIF/ATP
                    Fusion Technology, Pain Management, Osteoporosis, and Tumors. These comprehensive discussions will provide valuable insights and foster
                    collaborative efforts to enhance patient care.
                </p>
                <p>
                    In addition to the enriching scientific program, we are excited to announce that a research workshop by AO SPINE will be held in parallel with cadaveric
                    workshops, allowing attendees to delve into cutting-edge research and participate in hands-on educational experiences.
                </p>
                <p>
                    Furthermore, the conference will feature pre-congress workshops, including cadaveric workshops at Neuro-spine Hospital or Sharjah Surgical Institute
                    (SSI), providing a unique opportunity for skill development and knowledge exchange.
                </p>
                <p>
                    Alongside the conference, a medical exhibition will showcase major international companies at the forefront of developing and marketing cutting-edge
                    medical technology devices in this field.
                </p>
                <p>
                    We look forward to your active participation and fruitful collaborations at the 14th Pan Arab Spine Conference. Together, let us shape the future of spine
                    care and make a lasting impact on the lives of our patients.
                </p>
                <p className='fw-bold h5 pb-3' style={{ color: '#2E419D' }}>Sincerely,</p>
            </div>

            <Container className="pt-4 w-75 pb-4 content" >
                <Row className=''>
                    <Col className="pb-3">
                        <div className='d-flex'>
                            <div>
                                <img src={Sameh} className='rounded-3' alt="Sameh Abolfotouh" width={50} />
                            </div>
                            <div className='px-3'>
                                <div className=' fw-bold'>Sameh Abolfotouh</div>
                                <div className=' text-secondary'>Conference Chairman</div>
                            </div>
                        </div>
                    </Col>
                    <Col className="pb-3">
                        <div className='d-flex'>
                            <div>
                                <img src={Oubaid} className='rounded-3' alt="Oubaid" width={50} />
                            </div>
                            <div className='px-3'>
                                <div className=' fw-bold'>Abdul Razzaq Al-Obaid</div>
                                <div className=' text-secondary'>Conference Chairman</div>
                            </div>
                        </div>
                    </Col>
                    <Col className="pb-3">
                        <div className='d-flex'>
                            <div>
                                <img src={Youssry} className='rounded-3' alt="Youssry Elhawary" width={50} />
                            </div>
                            <div className='px-3'>
                                <div className=' fw-bold'>Youssry Elhawary</div>
                                <div className=' text-secondary'>Society Secretary-General</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Welcome;
