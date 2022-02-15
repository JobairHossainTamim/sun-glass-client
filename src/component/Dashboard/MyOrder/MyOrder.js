import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';

const MyOrder = () => {
    const [order,setOrder]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch(`https://serene-refuge-77261.herokuapp.com/purchase/${user.email}`)
    .then(res=>res.json())
    .then(data=>setOrder(data));
    },[order]);
    // Delete order
    const deleteData=(id)=>{
        const proceed =window.confirm('Are You Sure you want to delete');
        if(proceed){
            const url=`https://serene-refuge-77261.herokuapp.com/purchase/${id}`;
            fetch(url , {
            method:'DELETE'}
            )
        .then(res=>res.json())
        .then(data=>{
                if(data.deletedCount > 0 ){
                        alert('Delete Success full');
                        const remainingUser=order.filter(user =>user._id !== id);
                        setOrder(remainingUser);
                }
                else{
                    alert('Delete Failed');
                }
        });
        }
    }

    return (
        <div>
            <div className="container">
            <div className="row">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Status</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
   {
     order?.length === 0 ?
     <div className=" justify-content-center position-absolute">
                    <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
     :
     order.map(item => 
      <tr key={item._id}>
        <td>{item.productName}</td>
        <td>{item.ProductPrice}</td>
        <td>Pending</td>
        <td><button onClick={()=>{deleteData(item._id)}}  className="btn btn-primary">Delete Order </button></td>
      </tr>
     )
   }
  </tbody>
</Table>
            </div>
            </div>
           
        </div>
    );
};

export default MyOrder;