import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import sameh from "../../images/dr pics/sameh.jpg"
import omar from "../../images/dr pics/omar.jpg"
import faisal from "../../images/dr pics/faisal.jpg"
import mohammed from "../../images/dr pics/mohammed.png"
import waleed from "../../images/dr pics/waleed.jpg"
import abdelmoen from "../../images/dr pics/abdelmoen.jpg"
import alaa from "../../images/dr pics/alaa.jpg"
import firas from "../../images/dr pics/firas.jpg"
import khaled from "../../images/dr pics/khaled.jpg"
import mohamedali from "../../images/dr pics/mohamedali.jpg"
import youssry from "../../images/dr pics/Youssry_Elhawary.jpg"

import eg from '../../images/eg.png'
import uae from '../../images/UAE.png'
import qa from '../../images/qa.png'
import ksa from '../../images/ksa.png'
import palestine from '../../images/palestine.png'
import yemen from '../../images/yemen.png'
import su from '../../images/sudan.png'

import background from '../../images/BGs/1.jpg'
import './Board.css'

const Board = () => {

    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100vw 100%', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '950px', // Adjust height as needed
    };


    return (
        <Container fluid style={bg} id='program-board-members'>
            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase text-center board-text p-2 fw-bold'>Scientific Committee</h3>
            </div>

            <Row>
                <Container className='col-8 py-5 d-flex justify-content-center align-items-center text-center'>
                    <Col>
                        <div className='text-light '>
                            <img src={sameh} className='rounded-3 img ' alt="Sameh Abolfotouh" width={75} />
                            <img src={uae} alt="UAE" width={25} className='logo' />
                            <p className='pt-2'>Sameh Abolfotouh</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={omar} className='rounded-3 img ' alt="Omar Al Nori" width={75} />
                            <img src={qa} alt="QA" width={25} className='logo' />
                            <p className='pt-2'>Omar Al Nori</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={faisal} className='rounded-3 img ' alt="Faisal Konbaz" width={75} />
                            <img src={ksa} alt="KSA" width={25} className='logo' />
                            <p className='pt-2'>Faisal Konbaz</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={mohammed} className='rounded-3 img ' alt="Mohamed Khattab" width={75} />
                            <img src={eg} alt="EG" width={25} className='logo' />
                            <p className='pt-2'>Mohamed Khattab</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={waleed} className='rounded-3 img ' alt="Waleed Awwad " width={75} />
                            <img src={ksa} alt="KSA" width={25} className='logo' />
                            <p className='pt-2'>Waleed Awwad</p>
                        </div>
                    </Col>
                </Container>
            </Row>

            <div className='pt-5 d-flex justify-content-center align-items-center'>
                <h3 className='text-light text-uppercase text-center board-text p-2 fw-bold'>Board members</h3>
            </div>

            <Row>
                <Container className='col-7 py-5 d-flex justify-content-center align-items-center text-center'>
                    <Col>
                        <div className='text-light '>
                            <img src={abdelmoen} className='rounded-3 img ' alt="Abdelmoen Bacoh" width={75} />
                            <img src={qa} alt="QA" width={25} className='logo' />
                            <p className='pt-2'>Abdelmoen Baco</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={alaa} className='rounded-3 img ' alt="Alaa Azmy " width={75} />
                            <img src={palestine} alt="PALESTINE" width={25} className='logo' />
                            <p className='pt-2'>Alaa Azmy </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={firas} className='rounded-3 img ' alt="Firas Husban" width={75} />
                            <img src={uae} alt="UAE" width={25} className='logo' />
                            <p className='pt-2'>Firas Husban</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={khaled} className='rounded-3 img ' alt="Khaled Swailem" width={75} />
                            <img src={yemen} alt="YEMEN" width={25} className='logo' />
                            <p className='pt-2'>Khaled Swailem</p>
                        </div>
                    </Col>
                </Container>
            </Row>

            <Row>
                <Container className='col-5 py-5 d-flex justify-content-center align-items-center text-center'>
                    <Col>
                        <div className='text-light '>
                            <img src={mohamedali} className='rounded-3 img ' alt="Sameh Abolfotouh" width={75} />
                            <img src={su} alt="SUDAN" width={25} className='logo' />
                            <p className='pt-2'>Mohamed Ali</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={waleed} className='rounded-3 img ' alt="Waleed Awwad " width={75} />
                            <img src={ksa} alt="KSA" width={25} className='logo' />
                            <p className='pt-2'>Waleed Awwad</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-light '>
                            <img src={youssry} className='rounded-3 img ' alt="Youssry Elhawary" width={75} />
                            <img src={eg} alt="EG" width={25} className='logo' />
                            <p className='pt-2'>Youssry Elhawary</p>
                        </div>
                    </Col>
                </Container>
            </Row>
        </Container >
    )
}

export default Board;