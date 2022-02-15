import React, { useEffect, useState } from 'react';
import DataLoad from '../DataLoad/DataLoad';
import './ProductList.css';

const ProductList = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://serene-refuge-77261.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[services]);


   
    return (
        <div>
            <h1 className="text-primary my-4 mb-5">All Product  </h1>
            <div className="service-container">
                { services.slice(0,6).map(service=><DataLoad key={service._id} service={service}></DataLoad>)
                }
                
               
            </div>
        </div>
    );
};

export default ProductList;