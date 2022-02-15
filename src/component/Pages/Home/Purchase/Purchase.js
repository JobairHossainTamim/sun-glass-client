import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner, Table } from 'react-bootstrap';
import { useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

const Purchase = () => {
    const {user}=useAuth();

    
    const [purchaseData,setPurchaseData]=useState([]);
    useEffect(()=>{
    fetch(`https://serene-refuge-77261.herokuapp.com/purchase/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setPurchaseData(data));
    },[])

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
                        const remainingUser=purchaseData.filter(user =>user._id !== id);
                        setPurchaseData(remainingUser);
                }
                else{
                    alert('Delete Failed');
                }
        });
        }

    }
    const confirmNow=()=>{
        alert('Thanks For Confirmation');
        setPurchaseData([]);
      
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md my-5">
                                <Table striped bordered hover>
            <thead>
                <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Option</th>
                </tr>
            </thead>
            <tbody>
            {
                purchaseData?.length === 0 ?
                <div className=" justify-content-center position-absolute">
                                <Spinner  animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                </div>
                :
                purchaseData.map(item => 
                <tr key={item._id}>
                    <td>{item.productName}</td>
                    <td>{item.ProductPrice}</td>
                    <td><button onClick={()=>{deleteData(item._id)}}  className="btn btn-primary">Delete </button></td>
                </tr>
                )
            }
            </tbody>
            </Table>

                        </div>  
                                  {/* 2nd col */}
                    <div className="col-md-6 col-md my-5">
                    <ListGroup>
                    <ListGroup.Item>Email :{user.email} </ListGroup.Item>
                    <ListGroup.Item>Name :{user.displayName} </ListGroup.Item>
                    <ListGroup.Item><button onClick={confirmNow} className="btn btn-primary w-75">Confirm Order </button> </ListGroup.Item>
                    </ListGroup>
                        </div>                    

                </div>
            </div>
        </div>
    );
};

export default Purchase;