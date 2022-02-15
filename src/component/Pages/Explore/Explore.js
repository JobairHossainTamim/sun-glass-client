import React, { useEffect, useState } from 'react';
import DataLoad from '../Home/DataLoad/DataLoad';

const Explore = () => {

    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://serene-refuge-77261.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[services]);
    return (
        <div>
          <div className="service-container">
                { services.map(service=><DataLoad key={service._id} service={service}></DataLoad>)
                }
                
               
            </div>  
        </div>
    );
};

export default Explore;