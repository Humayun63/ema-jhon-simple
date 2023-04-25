import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut, setUser } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then( () => setUser(null))
        .catch(err => console.log(err))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="Ema Jhon Logo" />
            <div className='current-user'>
                {user && <><p><small>{user.email}</small></p>
                    <button onClick={handleLogOut}>Sign Out</button></>
                }
            </div>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>

        </nav>
    );
};

export default Header;