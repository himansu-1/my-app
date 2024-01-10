import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Mode from './Mode';




const Navbar = (props) => {
    // const navStyle = {
    //     background: 'aqua',
    //     border: '2px solid cyan'
    // }
    return (
        <nav className="navbar navbar-expand-lg  " id='nav' style={props.style}>
            <div className="container-fluid" >
                <Link className="navbar-brand " style={props.style} to="/">{props.title}</Link>
                {/* <a className="navbar-brand " style={props.style} href="/">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/home" style={props.style}>Home</Link>
                            {/* <a className="nav-link active " aria-current="page" href="/" style={props.style}>Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={props.style} to="/about">About</Link>
                            {/* <a className="nav-link " style={props.style} href="/">About</a> */}
                        </li>
                    </ul>
                    {/* <Mode/> */}
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
};

Navbar.defaultProps = {
    title: "TextUtils"
}

export default Navbar;