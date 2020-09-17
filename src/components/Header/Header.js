import React, { useContext } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { BookingContext, UserContext } from '../../App';
import { handleSignOut } from '../Login/loginManager';

const Header = () => {
    const { pathname } = useLocation();
    const [proceedToBooking, setProceedToBooking] = useContext(BookingContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const signOut = () => {
        handleSignOut()
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err));
    }

    const history = useHistory();
    const handleGoToLogin = () => {
        history.push('/login');
    }

    return (
        <div>
            <Navbar bg="none" variant="dark" fixed="top" className="header">
                <Container>
                    <Link to="/home" onClick={() => setProceedToBooking(false)}>
                        {
                            (pathname === '/' || pathname === '/home' || pathname === '/booking') ? <img className="logo" src="https://i.ibb.co/R7sy5yh/Group-1330.png" alt="Group-1330" />
                                : <img className="logo" src="https://i.ibb.co/891KxGt/Logo.png" alt="Logo" />
                        }
                    </Link>
                    {
                        (pathname === '/' || pathname === '/home' || pathname === '/booking') &&
                        <Form inline className="ml-auto">
                            <div className="search-field">
                                <FontAwesomeIcon style={{ color: 'white', marginRight: '10px' }} icon={faSearch} />
                                <input className="search-input" type="text" name="search-term" placeholder="Search your Destination..." />
                            </div>
                        </Form>
                    }
                    <Nav className="ml-auto">
                        <Link onClick={() => setProceedToBooking(false)} className={`menu-item ${pathname === '/' || pathname === '/home' || pathname === '/booking' ? 'text-white' : 'text-black'}`} to="/">News</Link>
                        <Link className={`menu-item ${pathname === '/' || pathname === '/home' || pathname === '/booking' ? 'text-white' : 'text-black'}`} to="/hotel">Destination</Link>
                        <Link onClick={() => setProceedToBooking(false)} className={`menu-item ${pathname === '/' || pathname === '/home' || pathname === '/booking' ? 'text-white' : 'text-black'}`} to="/">Blog</Link>
                        <Link onClick={() => setProceedToBooking(false)} className={`menu-item ${pathname === '/' || pathname === '/home' || pathname === '/booking' ? 'text-white' : 'text-black'}`} to="/">Contact</Link>
                    </Nav>
                    {
                        loggedInUser.success ?
                            <div className="d-flex align-items-center">
                                <img src="https://img.icons8.com/cotton/50/000000/user-male.png" alt="" style={{ width: '12%' }} />
                                <p className="text-black mt-3 ml-2 user-name">
                                    {loggedInUser.name}
                                </p>
                                <Button onClick={signOut} className="main-button" variant="outline-light">Logout</Button>
                            </div>
                            : <Button onClick={handleGoToLogin} className="main-button" variant="outline-light">Login</Button>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;