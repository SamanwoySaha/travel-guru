import React, { useContext } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { BookingContext } from '../../App';

const Header = () => {
    const { pathname } = useLocation();
    const [proceedToBooking, setProceedToBooking] = useContext(BookingContext);
    
    return (
        <div>
            <Navbar bg="none" variant="dark" fixed="top" className="header">
                <Container>
                    <Link to="/home" onClick={() => setProceedToBooking(!proceedToBooking)}>
                        {
                            (pathname === '/home' || pathname === '/booking') ? <img className="logo" src="https://i.ibb.co/R7sy5yh/Group-1330.png" alt="Group-1330" />
                            : <img className="logo" src="https://i.ibb.co/891KxGt/Logo.png" alt="Logo" />
                        }                        
                    </Link>
                    {
                        (pathname === '/home' || pathname === '/booking') &&
                        <Form inline className="ml-auto">
                            <div className="search-field">
                                <FontAwesomeIcon style={{ color: 'white', marginRight: '10px' }} icon={faSearch} />
                                <input className="search-input" type="text" name="search-term" placeholder="Search your Destination..." />
                            </div>
                        </Form>
                    }
                    <Nav className="ml-auto">
                        <Nav.Link className={`menu-item ${pathname === '/home' || pathname === '/booking'? 'text-white' : 'text-black'}`} href="#news">News</Nav.Link>
                        <Nav.Link className={`menu-item ${pathname === '/home' || pathname === '/booking'? 'text-white' : 'text-black'}`} href="#destination">Destination</Nav.Link>
                        <Nav.Link className={`menu-item ${pathname === '/home' || pathname === '/booking'? 'text-white' : 'text-black'}`} href="#blog">Blog</Nav.Link>
                        <Nav.Link className={`menu-item ${pathname === '/home' || pathname === '/booking'? 'text-white' : 'text-black'}`} href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Link to="/login"><Button className="main-button" variant="outline-light">Login</Button></Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;