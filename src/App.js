import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './component/Pages/Home/Home/Home';
import Header from './component/Pages/Header/Header';
import Footer from './component/Pages/Footer/Footer';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';
import Explore from './component/Pages/Explore/Explore';
import Purchase from './component/Pages/Home/Purchase/Purchase';
function App() {
  return (
    <div className="App">

     <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/explore'>
            <Explore/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
         
         <PrivateRoute  path='/purchase'>
            <Purchase></Purchase>
         </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
