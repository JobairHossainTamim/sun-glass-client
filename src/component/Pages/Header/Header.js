import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import './Header.css';

const Header = () => {
  const {user ,logout}=useAuth();

  const handleLogout= () => {
    logout();
  }
    return (
        <div>
             <header>
        <div className="logo">
          <h1>QC Glass Shop </h1>           
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" ></input>
        <label htmlFor="nav-toggle" className = "nav-toggle-label"> 
          <span className="label-span"></span> 
        </label>
        <nav> 
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/explore">Explore More</Link></li>
            <li><Link to="/purchase">Purchase</Link></li>

           {user.email ? 
           <li><Link to="/" onClick={handleLogout} >Logout</Link></li> 
           :
           <li><Link to="/login">Login</Link></li> }
            <li><Link to="/dashboard">Dashboard</Link></li> 
            
            
            
          </ul>
        </nav>
      </header>
        </div>
    );
};

export default Header;