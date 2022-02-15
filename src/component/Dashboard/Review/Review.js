import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';


const Review = () => {
    const {user}=useAuth();
    const[success, setSuccess]=useState(false);
    const initilInfo={Name: user.email};
    const [reviewInfo, setReviewInfo]=useState(initilInfo);

     // Set on blur
     const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newInfo={...reviewInfo};
        newInfo[field]= value;
        setReviewInfo(newInfo);
    }
    const AddReview=(e)=>{
         // send to the server
       fetch('https://serene-refuge-77261.herokuapp.com/review',{
        method:'POST',
        headers:{ 
            'content-type':'application/json'
        },
        body:JSON.stringify(reviewInfo)
    }).then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            setSuccess(true);
            
        }
    } );
        e.preventDefault();



    }
    return (
        <div>
            <h1>This is review</h1>
            <div className="container">
                <div className="row">
                <form onSubmit={AddReview}>
                <label  htmlFor="name" className="form-label ds">Enter Your Review for our page  </label>
                <textarea onBlur={handleOnBlur} typeof="text" className="form-control" name="description"  />
                <button className="btn btn-secondary w-100 my-2" type='submit'>Submit </button>
          
            </form>
            {success && <Alert variant="success my-2" > Thanks Fot the Review </Alert>}
                </div>
            </div>
            
        </div>
    );
};

export default Review;