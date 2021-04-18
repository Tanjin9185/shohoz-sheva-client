import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Booking from './components/Dashboard/Booking/Booking';
import AddService from './components/Dashboard/AddService/AddService';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/OrderList/OrderList';
import ManageService from './components/Dashboard/ManageService/ManageService';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <PrivateRoute path="/service/:id">
          <Booking/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/addService">
        <AddService/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/bookingList">
          <BookingList/>
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <AddReview/>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList/>
        </PrivateRoute>
        <PrivateRoute path="/manageService">
          <ManageService/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
