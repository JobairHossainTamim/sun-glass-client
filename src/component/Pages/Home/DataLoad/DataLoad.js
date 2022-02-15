import React from 'react';
import './DataLoad.css';
import useAuth from './../../../../hook/useAuth';
import { useLocation,useHistory } from 'react-router-dom';

const DataLoad = (props) => {
    const {name,price,imgUrl,description,_id}=props.service;
    const {user}=useAuth();

    // Redirect
    // Redirect with
const location=useLocation();
const history=useHistory();
const redirect_uri=location.state?.from || '/purchase';
const Log_redirect_uri=location.state?.from || '/login';
    
    const purchaseData=()=>{
        if(user.email){
            const initializePurchase={

             "email":user.email,
             "productName":name,
             "ProductPrice":price};

        fetch('https://serene-refuge-77261.herokuapp.com/purchase',{
            method:'POST',
            headers:{ 
                'content-type':'application/json'
            },
            body:JSON.stringify(initializePurchase)
        }).then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
             alert('Purchase Success')
             history.push(redirect_uri);
           }
        })

        }
        else{
                alert('Please Login');
                history.push(Log_redirect_uri);
        }
        
    }
    return (
        <div>
             {
              <div className="profiles">
                  <img className="img-fluid" src={imgUrl} alt=''  />
                  <div className="my-4">
                  <h3>Product  Name : {name}</h3>
                  <h4 >Only On : {price} $</h4>
                  <h6>Details : {description}</h6>
                  <div> <button  className="btn btn-primary w-75" onClick={purchaseData}>Purchase</button></div>
                 
                  </div>
                
                  
              </div>
           }
        </div>
    );
};

export default DataLoad;