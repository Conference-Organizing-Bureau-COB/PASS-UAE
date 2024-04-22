import React from 'react';
import COB from '../../images/ConferenceLogos.png'
import UAE from '../../images/UAE.png'
import EG from '../../images/eg.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faViber, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

export default function Footer() {
    function GoogleMap() {
        return (
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1396453129555!2d31.18783597390692!3d30.061531417763906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458414125507acb%3A0xee704d3c3e7b3ce3!2s14%20El-Khaleel%2C%20Mit%20Akaba%2C%20Agouza%2C%20Giza%20Governorate%203754202!5e0!3m2!1sen!2seg!4v1713633456646!5m2!1sen!2seg"
                width="380"
                height="380"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        );
    }
    return (
        <>

            <MDBFooter className='text-center text-lg-start text-light'>
                <section className='pt-5' style={{ backgroundColor: '#272A7B' }}>

                    <MDBContainer className='text-center text-md-start'>
                        <MDBRow >
                            {/* First Col */}
                            <MDBCol className='m-0 mb-4' lg={5} md={12} sm={12}>
                                <h6 className=' fw-bold mb-4'>
                                    <MDBIcon icon="gem" />
                                    <div className=''>
                                        <p className='fw-bold'>  Organizing Office </p>
                                        <img src={COB} alt="Footer Logo" className='w-50 m-0' />
                                    </div>
                                </h6>
                                <div className='m-0 d-flex gap-2 align-items-start'>
                                    <img src={UAE} alt="UAE Logo" style={{ width: "35px" }} />
                                    <div className='h5 mb-2 pt-1 '> UAE office</div>
                                </div>
                                <div>
                                    <div className='d-flex gap-3 align-items-center ms-2 '>
                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "gold" }} />
                                        <span className='h6 mt-1' style={{ fontSize: "14px" }}>  Dubai Silicon Oasis, Dubai, United Arab Emirates</span>
                                    </div>
                                    <div className='d-flex gap-3  align-items-center'>
                                        <FontAwesomeIcon icon={faViber} className='viber ms-1' />
                                        <span style={{ fontSize: "14px" }} className='m-0'>  Dubai Silicon Oasis</span>
                                    </div>
                                </div>

                                <div className='mt-4 d-flex gap-2 align-items-start'>
                                    <img src={EG} alt="EG Logo" style={{ width: "35px" }} />
                                    <div className='h5 mb-3 pt-1'> Egypt office</div>
                                </div>
                                <div>
                                    <div className='d-flex gap-3  ms-2'>
                                        <FontAwesomeIcon icon={faLocationDot} className='mt-1 mb-0' style={{ color: "gold" }} />
                                        <span className='h6' style={{ fontSize: "14px" }}>14 El Khalil St, off El Gihad St, Lebanon Sq. El Mohandessin, Giza, Egypt</span>
                                    </div>
                                    <div className='d-flex gap-2 m-0 align-items-center'>
                                        {/* <FontAwesomeIcon icon={faViber} className='viber ms-1' /> */}
                                        <FontAwesomeIcon icon={faPhone} className='ms-2' />
                                        <span style={{ fontSize: "14px" }} className='m-0   fw-bold'>(+202) 33023642</span>
                                        <span style={{ fontSize: "14px" }} className='m-0   fw-bold'>(+202) 33023642</span>
                                        <span style={{ fontSize: "14px" }} className='m-0  fw-bold'>(+202) 33023642</span>
                                    </div>
                                </div>

                                {/* Icons */}
                                <MDBContainer className='mt-4 ms-0 pb-0'>
                                    <section className='mb-4'>
                                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </MDBBtn>

                                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </MDBBtn>

                                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </MDBBtn>

                                        {/* Add your own button for X with the appropriate icon */}
                                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </MDBBtn>
                                    </section>
                                </MDBContainer>
                            </MDBCol>

                            {/* Second Col */}
                            <MDBCol className='mx-auto mb-4' lg={2} md={12} sm={12}>
                                <h4 className=' fw-bold mb-4'>Information</h4>
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Home
                                    </a>
                                </p>
                                <hr style={{ width: "200px" }} />
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Welcome Message
                                    </a>
                                </p>
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className='text-decoration-none h6'>
                                        Overview
                                    </a>
                                </p>
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Program
                                    </a>
                                </p>
                                <hr style={{ width: "200px" }} />
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Registration
                                    </a>
                                </p>
                                <hr style={{ width: "200px" }} />
                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Accommodation
                                    </a>
                                </p>
                                <hr style={{ width: "200px" }} />

                                <p className='d-flex gap-2 hover'>
                                    <FontAwesomeIcon icon={faCircleRight} className='circle-icon' />
                                    <a href='#!' className=' text-decoration-none h6'>
                                        Contact Us
                                    </a>
                                </p>
                                <hr style={{ width: "200px" }} />
                            </MDBCol>

                            {/* Third Col */}
                            <MDBCol className='mx-auto mb-md-0 mb-4' lg={4} md={12} sm={12}>
                                <h6 className='text-uppercase fw-bold mb-4'>Google Map</h6>
                                {GoogleMap()}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </section>
            </MDBFooter>
            <div className="container-fluid">
                <div className='row py-4' style={{ backgroundColor: "#0D0F38" }}>
                    <div className="col-md-6 col-sm-12 text-center">
                        <div className="text-light" >
                            © 2024 <span style={{ color: "gold" }}>PASS UAE 2025</span> all rights reserved.
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <div className='text-light' >Powered by
                            <span style={{ color: "gold" }}> Conference Organizing Bureau (COB)</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className='p-4' style={{ backgroundColor: "#0D0F38" }}>
                <div className="text-light col-lg-12 col-md-6 col-sm-12" >
                    © 2024 <span style={{ color: "gold" }}>PASS UAE 2025</span> all rights reserved.
                </div>
                <div className='text-light col-lg-12 col-md-6 col-sm-12' >Powered by <span style={{ color: "gold" }}>Conference Organizing Bureau (COB)</span></div>
            </section> */}
        </>
    );
}
