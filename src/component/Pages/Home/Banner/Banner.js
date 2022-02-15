import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [banner,setBanner]=useState([]);
    useEffect(()=>{
        const url='https://serene-refuge-77261.herokuapp.com/banner';
       fetch(url)
       .then(res=>res.json())
       .then(data=>setBanner(data));
   },[banner]);
    return (
        <div>
             <Carousel>

                
        {
            banner.length=== 0 ?
            <h1>Please waite </h1>
                :

            banner.map(banner=>
           <Carousel.Item key={banner._id}>
              <img
              className="size d-block img-fluid w-100 img-size"
              src={banner.img}
             alt="First slide"
    />
                <Carousel.Caption>
        <h3> {banner.name}</h3>
       
    </Carousel.Caption>
    </Carousel.Item>
    )}
</Carousel>
        </div>
    );
};

export default Banner;