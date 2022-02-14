import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Header.css';
import logo from '../../Image/logo.png';
import { UserContext } from '../../../App';
import { handleSignOut } from '../Login/LoginManager'

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);


            })
    }
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
                            {loggedInUser.userName || loggedInUser.email || loggedInUser.displayName ? <Nav.Link as={Link} to="/"><li><a href="/">{loggedInUser.userName || loggedInUser.email.substring(0, 12) || loggedInUser.displayName}</a></li></Nav.Link> :

                                <>  <Nav.Link as={Link} to="/login"><li><a href="/">Login</a></li></Nav.Link>
                                    <Nav.Link data-bs-toggle="modal" data-bs-target="#test-admiin">
                                        Test Admin
                                    </Nav.Link>
                                </>
                            }
                            {loggedInUser.userName || loggedInUser.email || loggedInUser.displayName ? <Nav.Link as={Link} to="" onClick={signOut}><li><a href="/">LogOut</a></li></Nav.Link> : ''}

                            <div className="modal fade" id="test-admiin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>  </div>
                                        <div className="modal-body">
                                            Email: tanjin.maria2015@gmail.com
                                            <br />
                                            Password: testdashboard22
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(service._id)}>Delete</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>


    );
};

export default Header;