import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateFlight from "./components/createFlight";
import UpdateFlight from "./components/UpdateFlight";
import ShowAllFlights from "./components/ShowAllFlights";
import ShowFlights from "./components/ShowFlights";
import LoginSide from "./components/Login";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";
import Seats from "./components/Seats/Dashboard.js";
import UserShowFlights from "./components/UserShowFlights";
import axios from "axios";
import ShowAllUserReservations from "./components/ShowAllUserReservations";
import CustomizedTabs from "./components/UserProfile/Tab";
import AppBar from "./components/AppBar/appBar";

axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path='/' element={<App/>}>
                  <Route path='createFlight' element={<CreateFlight/>}/>
                  <Route path='updateFlight/:id' element={<UpdateFlight/>}/>
                  <Route path='' element={<ShowAllFlights/>}/>
                  <Route path='showFlights' element={<ShowFlights/>}/>
                  <Route path='login' element={<LoginSide/>}/>
                  <Route path='signup' element={<SignUp/>}/>
                  <Route path='selectSeats/:departureFlightId/:returnFlightId/:noOfAdults/:noOfChildren/:cabinClass' element={<Seats/>}/>
                  <Route path='selectSeats/:reservationId' element={<Seats/>}/>
                  <Route path={'userShowFlights'} element={<UserShowFlights/>}/>
                  <Route path='userprofile' element={<UserProfile/>}/>
                  <Route path='showUserReservations' element={<ShowAllUserReservations/>}/>
                  <Route path='tab' element={<CustomizedTabs/>}/>
                  <Route path='bar' element={<AppBar/>}/>
              </Route>

          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

