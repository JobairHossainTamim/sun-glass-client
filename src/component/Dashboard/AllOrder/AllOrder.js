import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const AllOrder = () => {
    const [allOrder,setAllOrder]=useState([]);
    useEffect(()=>{
        fetch('https://serene-refuge-77261.herokuapp.com/purchase')
        .then(res=>res.json())
        .then(data=>setAllOrder(data))
    },[allOrder])
    return (
        <div>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>Email</th>
      <th>Order Product</th>
      <th>Price    </th>
      <th>Status</th>
      <th>Changed</th>
    </tr>
  </thead>
  <tbody>
   {
     allOrder?.length === 0 ?
     <div className=" justify-content-center position-absolute">
                    <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
     :
     allOrder.map(item => 
      <tr key={item._id}>
        <td>{item.email}</td>
        <td>{item.productName}</td>
        <td>{item.ProductPrice}</td>
        <td>Pending</td>
        <td><button className="btn btn-primary ">State Changed</button></td>
        <td></td>
      </tr>
     )
   }
  </tbody>
</Table>
        </div>
    );
};

export default AllOrder;