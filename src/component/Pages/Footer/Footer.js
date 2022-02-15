import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

<div className="footer-right">

  <Link  to=""><i className="fa fa-facebook"></i></Link>
  <Link  to=""><i className="fa fa-twitter"></i></Link>
  <Link  to=''><i className="fa fa-linkedin"></i></Link>
  <Link  to=""><i className="fa fa-github"></i></Link>

</div>

<div className="footer-left">

  <p className="footer-links">
    <Link  to="/home" >Home</Link>

    <Link  to="/login">Login</Link>

    <Link  to="/explore">Explore More </Link>

    
   

    
  </p>

  <p>Jobair Hossain Tamim &copy; 2021</p>
</div>

</footer>
        </div>
    );
};

export default Footer;