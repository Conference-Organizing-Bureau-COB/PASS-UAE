import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from '../../images/ConferenceLogos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('transparent');

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            const navbarHeight = 80; // Adjust this according to your navbar height
            const threshold = navbarHeight * 0.5; // Change the percentage as needed

            if (currentScrollPosition > threshold) {
                setNavbarBackground('rgba(48,43,130,0.8)');
            } else {
                setNavbarBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar style={{ background: navbarBackground, width: '100%', position: 'fixed', zIndex: 1000, margin: 0 }} expand="lg" className="custom-navbar py-2">
            <div className="container">
                <img src={logos} className='img-fluid w-25' alt="" />

                <Navbar.Toggle
                    aria-controls="navbarSupportedContent"
                    className={`bg-transparent text-light ${isOpen ? 'collapsed' : ''} outline-none border-transparent`}
                    onClick={toggleNavbar}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                    <Nav className="ml-auto mx-3 gap-4">
                        <Nav.Item>
                            <Nav.Link active className="text-light text-uppercase custom-size" href="#">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light text-uppercase custom-size" href="#">Welcome Message</Nav.Link>
                        </Nav.Item>
                        <Dropdown>
                            <Dropdown.Toggle className="text-light text-uppercase border-0 custom-size px-0" variant="transparent" id="dropdown-basic">
                                Overview
                            </Dropdown.Toggle>
                            {/* <Dropdown.Menu>
                                <Dropdown.Item href="#" className='d-none'>Action</Dropdown.Item>
                                <Dropdown.Item href="#" className='d-none'>Another action</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='d-none'>Something else here</Dropdown.Item>
                            </Dropdown.Menu> */}
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="text-light text-uppercase border-0 custom-size px-0" variant="transparent" id="dropdown-basic">
                                Program
                            </Dropdown.Toggle>
                            {/* <Dropdown.Menu>
                                <Dropdown.Item href="#" className='d-none'>Action</Dropdown.Item>
                                <Dropdown.Item href="#" className='d-none'>Another action</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='d-none'>Something else here</Dropdown.Item>
                            </Dropdown.Menu> */}
                        </Dropdown>

                        <Nav.Item>
                            <Nav.Link className="text-light text-uppercase custom-size" href="#">Registration</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light text-uppercase custom-size" href="#">Accomodation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light text-uppercase custom-size" href="#">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;
