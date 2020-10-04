import React from 'react';
import logo from "../../images/logo.png";
// import "./Header.css";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand w-25" href="#">
                        <img class="img-fluid" src={logo} alt="logo" style = {{width:"50%"}}/>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item active"> 
                                <Link to= "/home">
                                    <a class="nav-link" href="#home" style = {{color:"black"}}>Home </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#destination" style = {{color:"black"}}>Donation</a>
                            </li>
                            <li class="nav-item active"> 
                                <Link to= "/events">
                                    <a class="nav-link" href="#events" style = {{color:"black"}}>Events</a>
                                </Link>
                            </li>
                            
                            <li class="nav-item">
                                {
                                    // loggedInUser.email ? <button class="btn btn-primary" style = {{backgroundColor:"#F9A51A"}} onClick={() => setLoggedInUser({})}>Sign out</button> :
                                    <button class="btn btn-primary" style = {{backgroundColor:"#F9A51A"}} onClick={<Link to="/login"></Link>}>Login</button>
                                }
                                
                            </li> 
                            <li class="nav-item">
                                {
                                    // loggedInUser.email ? <button class="btn btn-primary" style = {{backgroundColor:"#F9A51A"}} onClick={() => setLoggedInUser({})}>Sign out</button> :
                                    <button class="btn btn-primary" style = {{backgroundColor:"#F9A51A"}} onClick={<Link to="/admin"></Link>}>Admin</button>
                                }
                                
                            </li> 
                            <li class="nav-item">
                                {/* <h6 style = {{marginLeft:"5px"}}>{loggedInUser.displayName || loggedInUser.name}</h6> */}
                            </li> 
                        </ul> 
                    </div>
                </div>
            </nav>             
        </div>
    );
};

export default Header;