
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../hook/useAuth';
import AllOrder from '../AllOrder/AllOrder';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Product from '../Product/Product';
import Review from '../Review/Review';


const Dashboard = () => {
  const {user ,logout,admin}=useAuth();
  const handleLogout=()=>{
    logout();
  }
  // Verify Admin User



    // Nested Route
  const  { path, url } = useRouteMatch();

    return (
        <div>
              

    <div className="container">
         <div className="row">
             <div className="col-md-3 col-md">
             <ListGroup>
             <ListGroup.Item> <Link to={`${url}`}><button className="btn btn-primary w-75">Dashboard</button></Link></ListGroup.Item>
                <ListGroup.Item> <Link to={`${url}/Pay`}><button className="btn btn-primary w-75" >Payment </button></Link></ListGroup.Item>
                  
                  <ListGroup.Item> <Link to={`${url}/myOrder`}><button className="btn btn-primary w-75" >My Order </button></Link></ListGroup.Item>
                 <ListGroup.Item>
                 <Link to={`${url}/review`}><button className="btn btn-primary w-75" >Review </button></Link>
                 </ListGroup.Item>
                 { admin && <div>
                  <ListGroup.Item><Link to={`${url}/manage`}><button className="btn btn-primary w-75" >Manage Product  </button></Link></ListGroup.Item>
                 <ListGroup.Item><Link to={`${url}/admin`}><button className="btn btn-primary w-75" >Make Admin  </button></Link></ListGroup.Item>
                 <ListGroup.Item><Link to={`${url}/AllOrder`}><button className="btn btn-primary w-75" >All Order </button></Link></ListGroup.Item>
                   </div>}
                 <ListGroup.Item> <Link  to="/" className='btn btn-primary w-75' onClick={handleLogout}>Logout</Link></ListGroup.Item>
             </ListGroup>
             </div>
             <div className="col-md-9 col-md">

                        {/* Router */}
        <Switch>
        <Route exact path={path}>
       <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/Pay`}>
        <Pay></Pay>
        </Route>
        <Route  path={`${path}/myOrder`}>
         <MyOrder></MyOrder>
        </Route>
        <Route  path={`${path}/AllOrder`}>
         <AllOrder></AllOrder>
        </Route>
        <Route  path={`${path}/review`}>
         <Review></Review>
         </Route>
        
        <Route  path={`${path}/manage`}>
         <Product></Product>
        </Route>
        <Route  path={`${path}/admin`}>
         <MakeAdmin/>
        </Route>
      </Switch>
      {/* Router */}
             </div>
             
         </div>
    </div>       
              
        </div>
    );
};

export default Dashboard;