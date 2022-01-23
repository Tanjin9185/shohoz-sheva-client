import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Header.css';
import logo from '../../Image/logo.png';
import { UserContext } from '../../../App';


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser)
    return (
        <section className="container">
            <Navbar expand="lg">
                <Navbar.Brand as={Link} to="/"><img class="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" class="flex-end">
                    <Nav className="ml-auto" class="style-3 menu-3">
                        <ul class="menu-3">
                            <Nav.Link as={Link} to="/"><li><a href="/">Home</a></li></Nav.Link>
                            <Nav.Link as={Link} to=""><li><a href="/">Service</a></li></Nav.Link>
                            <Nav.Link as={Link} to=""><li><a href="/">Review</a></li></Nav.Link>
                            <Nav.Link as={Link} to="/dashboard"><li><a href="/">Dashboard</a></li></Nav.Link>
                            <Nav.Link as={Link} to="#contact"><li><a href="#contact">Contact</a></li></Nav.Link>
                            {loggedInUser.userName || loggedInUser.displayName ? <Nav.Link as={Link} to="/"><li><a href="#contact">{loggedInUser.userName || loggedInUser.displayName}</a></li></Nav.Link> : <Nav.Link as={Link} to="/login"><li><a href="/">Login</a></li></Nav.Link>}
                        </ul>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>


    );
};

export default Header;