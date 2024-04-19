import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from '../../images/ConferenceLogos.png';

const CustomNavbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('transparent');

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
        <Navbar style={{ background: navbarBackground, width: '100%', position: 'fixed', zIndex: 1000, padding: 0, margin: 0 }} expand="lg" className="custom-navbar">
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
