import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (<>
            <div>
                <h1> progetto del venerdì </h1>
            </div>
            <div className='header_container'>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/recovery'}>Recovery password</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/newpassword'}>New Password</Link>
                <Link to={'/supercomponents'}>Super Components</Link>
            </div>
        </>
    )
}

export default Header;