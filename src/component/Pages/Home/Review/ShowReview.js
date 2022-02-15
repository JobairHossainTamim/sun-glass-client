import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ShowReview = () => {
    const [review,setReview]=useState([]);

    useEffect(()=>{
    fetch('https://serene-refuge-77261.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>{
        setReview(data);
    })
    },[review])
    return (
        <div>
           
            <div className="border border-3 my-5">
            <h1>Top Review </h1>
            </div>
            <Row xs={1} md={3} className="g-4 my-5">
           
           {review.map(data=><Col>
           <Card key={data._id}>
           <Card.Body>
      <Card.Title>Email: {data.Name}</Card.Title>
      <Card.Text>
          Feedback:  {data.description}
      </Card.Text>
    </Card.Body>
           </Card> 
           </Col>)}
          
           </Row>
        </div>
    );
};

export default ShowReview;