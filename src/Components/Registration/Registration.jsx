import React from 'react'
import background from '../../images/BGs/2.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import './Registration.css'


const bg = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%', // Adjust to cover full width and height
    backgroundRepeat: 'no-repeat',
    width: '100%', // Use vw unit for viewport width
    height: '100%' // Adjust height as needed
}
const Registration = () => {
    return (<>
        <Container fluid style={bg}>
            <div className='pt-5 pb-4 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase  text-center about-text p-2 fw-bold'>
                    <span className=' text-decoration-underline fw-bold'>Reg</span>
                    istration
                </h3>
            </div>

            {/* Tables */}
            <Container >

                <div className="row text-center d-flex justify-content-center align-items-center">
                    <div className='col-lg-7 p-0'>
                        <div className='fees py-1 text-light fw-bold border border-dark text-center fs-4'>
                            Registration Fees
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <div className='row justify-content-center align-items-center text-center'>
                            <div className='col-lg-9 p-0'>
                                <h4 className='m-0 py-4 border border-dark fw-bold baby-blue'>
                                    Attending surgeons
                                </h4>
                            </div>
                            <div className='col-lg-3 p-0'>
                                <h4 className='m-0 py-4 baby-blue bg-transparent p-0 text-center border border-dark'>
                                    1800 AED
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-7 '>
                        <div className='row justify-content-center align-items-center text-center'>
                            <div className='col-lg-9 p-0'>
                                <h4 className='m-0 py-4 border border-dark fw-bold baby-blue'>
                                    Residents and Fellows
                                </h4>
                            </div>
                            <div className='col-lg-3 p-0'>
                                <h4 className='m-0 py-4 baby-blue bg-transparent p-0 text-center border border-dark'>
                                    1000 AED
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <div className='row justify-content-center align-items-center text-center'>
                            <div className='col-lg-9 p-0'>
                                <h4 className='m-0 py-4 border border-dark fw-bold baby-blue'>
                                    Nurses and Physical therapists
                                </h4>
                            </div>
                            <div className='col-lg-3 p-0'>
                                <h4 className='m-0 py-4 baby-blue bg-transparent p-0 text-center border border-dark'>
                                    800 AED
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </Container>

        {/* Package Section */}
        <Container className='pb-5'>
            <div className="row text-center d-flex justify-content-center align-items-center">
                <div className='container pt-3 col-7'>
                    <h4 className=' pt-5 pb-3 fw-bold text-center custom-text-color' >
                        Registration Package Includes
                    </h4>
                </div>

            </div>

            <div className="row">
                <div className='container col-lg-9 col-md-12 col-sm-12 col-xs-12 d-flex gap-2'>
                    <h5 className='col-6 m-0 py-1  custom-text-color'>
                        - Conference kit & materials
                    </h5>
                    <h5 className='col-6 m-0 py-1 bg-transparent p-0 custom-text-color' >
                        - Conference certificate
                    </h5>
                </div>
                <div className='container col-lg-9 col-md-12 col-sm-12 col-xs-12 d-flex gap-2'>
                    <h5 className='col-6 m-0  custom-text-color'>
                        - Access to all scientific sessions and exhibits
                    </h5>
                    <h5 className=' m-0  col-lg-7 col-md-12 col-sm-12 col-xs-12 bg-transparent p-0 custom-text-color' >
                        - Meals during the conference day
                    </h5>
                </div>
            </div>
        </Container>
    </>
    )
}

export default Registration;