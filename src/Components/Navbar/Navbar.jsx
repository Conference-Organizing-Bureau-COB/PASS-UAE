import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from '../../images/ConferenceLogos.png'

const CustomNavbar = () => {
    return (
        <Navbar bg="transparent" expand="lg" fixed="top" className="custom-navbar m-4">
            <div className="container">
                <img src={logos} className='img-fluid w-25' alt="" />
                <Navbar.Toggle aria-controls="navbarSupportedContent" className="bg-light text-light" />
                <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                    <Nav className="ml-auto mx-3 gap-4">
                        <Nav.Item>
                            <Nav.Link className="text-light" href="#">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light" href="#">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light" href="#">Another Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light disabled" href="#" disabled>Disabled</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;
