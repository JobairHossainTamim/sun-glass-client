import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ShowAllProduct = () => {
    const [manage,setManage]=useState([]) ;
    useEffect(()=>{
        fetch('https://serene-refuge-77261.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setManage(data))
    },[manage]);


    const deleteData=(id)=>{
        const proceed =window.confirm('Are You Sure you want to delete');
        if(proceed){
            const url=`https://serene-refuge-77261.herokuapp.com/product/${id}`;
            fetch(url , {
            method:'DELETE'}
            )
        .then(res=>res.json())
        .then(data=>{
                if(data.deletedCount > 0 ){
                        alert('Delete Success full');
                        const remainingUser=manage.filter(user =>user._id !== id);
                        setManage(remainingUser);
                }
                else{
                    alert('Delete Failed');
                }
        });
        }
    }
    return (
        <div>
              <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
   {
     manage?.length === 0 ?
     <div className=" justify-content-center position-absolute">
                    <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
     :
     manage.map(item => 
      <tr key={item._id}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.imgUrl.slice(0,20)}</td>
        <td><button onClick={()=>{deleteData(item._id)}}  className="btn btn-primary">Delete Data</button></td>
      </tr>
     )
   }
  </tbody>
</Table>
        </div>
    );
};

export default ShowAllProduct;