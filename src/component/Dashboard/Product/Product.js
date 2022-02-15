import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import ShowAllProduct from './ShowAllProduct';

const Product = () => {
    const[productInfo,setProductInfo]=useState({});
    const[success, setSuccess]=useState(false);
    const addData=(e)=>{

    e.preventDefault();
    fetch('https://serene-refuge-77261.herokuapp.com/product',{
        method:'POST',
        headers:{ 
            'content-type':'application/json'
        },
        body:JSON.stringify(productInfo)
    }).then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            setSuccess(true);

        }
    } );


    }

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newInfo={...productInfo};
        newInfo[field]= value;
        setProductInfo(newInfo);
    }

    return (
        <div>
            <div className="border border-2">
            <h1>Add All Product</h1>
            <div className="container">
                <div className="row">
                <form onSubmit={addData}>
                <label  htmlFor="name" className="form-label ds">Enter Product Name  </label>
                <input onBlur={handleOnBlur} typeof="text" className="form-control" name="name"  />
                <label  htmlFor="name" className="form-label ds">Enter Product Price  </label>
                <input onBlur={handleOnBlur} typeof="number" type="number" className="form-control" name="price"  />
                <label  htmlFor="name" className="form-label ds">Enter Product Image Url  </label>
                <input onBlur={handleOnBlur} typeof="text" className="form-control" name="imgUrl"  />
                <label  htmlFor="name" className="form-label ds">Enter Product Description  </label>
                <textarea onBlur={handleOnBlur} typeof="text" className="form-control" name="description"  />
                <button className="btn btn-secondary w-100 my-2" type='submit'>Submit </button>
          
            </form>
            {success && <Alert variant="success my-2" > Data insert success </Alert>}
                </div>
            </div>
            </div>
            <div className="border border-2">
            <h1>Show All Product </h1>
            <ShowAllProduct></ShowAllProduct>
            </div>
            
        </div>
    );
};

export default Product;