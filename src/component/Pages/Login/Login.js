import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import reg from '../../../img/reg.jpg';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }
   const handleRegistration = e=>{
    loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
   }

    return (
        <div>
          <section className="p-5" >
        <div className="container ">
            <div className="row align-items-center justify-content-between">
                <div className="col-md">
                    <img src={reg} className="img-fluid" alt=""/>
                </div>
                <div className="col-md p-5">
              {/* Login From */}

              <form onSubmit={handleRegistration}>
                        
                            
                            <label  htmlFor="email" className="form-label ds">Enter Your Email </label>
                          <input onBlur={handleOnBlur} typeof="text" className="form-control" name="email" id="email" />
                           
                          <label  htmlFor="Password" className="form-label ds">Enter Your Password </label>
                          <input onBlur={handleOnBlur} name="password" type="password" className="form-control" id="password" />
                          <br/>
                          <Link  to='/register' className="ds"><p>Register Now </p></Link>
                          <br/>
                          <button type="submit" className="btn btn-primary w-100">Login Now</button>

                    
                    </form>
                    {user?.email && <Alert variant="success my-2" >User Created successfully!  </Alert>}
                    {authError && <Alert variant="error my-2" >{authError} </Alert>}
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Login;