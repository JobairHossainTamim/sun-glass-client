import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const[success, setSuccess]=useState(false);

    const handleMakeAdmin= (e) => {
        const user={email}
        fetch('https://serene-refuge-77261.herokuapp.com/users/admin',{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            setSuccess(true);
        }
        
    })
    e.preventDefault();
    }
    const handleOnBlur=e=> {

        setEmail(e.target.value);
    }
    return (
        <div>
            <h2 className='text-primary'>This is Admin page</h2>
            <form className="my-5" onSubmit={handleMakeAdmin}>
            <label  htmlFor="email" className="form-label ds">Enter Email Who this page Admin </label>
            <input onBlur={handleOnBlur} typeof="email" className="form-control " name="email" id="email" />
            <button className="btn btn-primary my-3 w-75" type="submit">Make Admin</button>

            </form>
            {success && <Alert variant="success my-2" > You make {email} admin Successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;