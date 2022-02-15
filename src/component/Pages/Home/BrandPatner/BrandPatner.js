import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './BrandPatner.css'
const BrandPatner = () => {
    const [brand,setBrand]=useState([]);
    useEffect(()=>{
        const url='https://serene-refuge-77261.herokuapp.com/brand';
       fetch(url)
       .then(res=>res.json())
       .then(data=>setBrand(data));
   },[brand]);

    return (
        <div className="my-5">
            <h2 className="text-success">Our Partner </h2>
            <Row xs={1} md={2} className="g-4">
           
            {brand.map(data=><Col>
            <Card key={data._id}>
                <Card.Img variant="top" className="img-fluid b-p-s" src={data.img} />
        <Card.Body>
          <Card.Text>
          <h5> {data.name}</h5>
          </Card.Text>
        </Card.Body>
            </Card> 
            </Col>)}
           
            </Row>
        </div>
    );
};

export default BrandPatner;