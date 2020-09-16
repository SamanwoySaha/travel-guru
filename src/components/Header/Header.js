import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar bg="none" variant="dark" fixed="top" className="header">
                <Container>
                <Navbar.Brand href="#home">
                    <img src="https://i.ibb.co/R7sy5yh/Group-1330.png" alt="Group-1330" />
                </Navbar.Brand>
                <Form inline className="ml-auto">
                    <div className="search-field">
                        <FontAwesomeIcon style={{color: 'white', marginRight: '10px'}} icon={faSearch} />
                        <input className="search-input" type="text" name="search-term" placeholder="Search your Destination..."/>
                    </div>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link className="menu-item" href="#news">News</Nav.Link>
                    <Nav.Link className="menu-item" href="#destination">Destination</Nav.Link>
                    <Nav.Link className="menu-item" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="menu-item" href="#contact">Contact</Nav.Link>
                </Nav>                
                    <Button className="main-button" variant="outline-light">Login</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;