import React, { useState  } from 'react';
import { Alert } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import reg from '../../../img/reg.jpg';
import useAuth from './../../../hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser,user ,authError}=useAuth();

// Set file location to
const history= useHistory();

const handleOnBlur=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}


const handleRegistration=(e)=>{
    registerUser(loginData.email, loginData.password , loginData.name, history);
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
                        <label  htmlFor="email" className="form-label ds">Enter Your Name </label>
                          <input name="name" typeof="text" onBlur={handleOnBlur} className="form-control" id="email" />
                            
                            <label  htmlFor="email" className="form-label ds">Enter Your Email </label>
                          <input name="email"  onBlur={handleOnBlur}  typeof="text" className="form-control" id="email" />
                           
                          <label  htmlFor="Password" className="form-label ds">Enter Your Password </label>
                          <input onBlur={handleOnBlur}
                           name="password"
                          typeof="password" className="form-control" id="password" />
                          <br/>
                          <Link  to='/login' className="ds"><p>Login Now </p></Link>
                          <br/>
                          <button type="submit" className="btn btn-primary w-100">Registration Now</button>                    
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

export default Register;