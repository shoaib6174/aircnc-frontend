import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/1MainPages/Homepage/Homepage';
import HotelSelection from './Components/1MainPages/HotelSelection/HotelSelection';
import Hotel from './Components/1MainPages/Hotel/Hotel';
import CheckoutPage from './Components/1MainPages/CheckoutPage/CheckoutPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        
    
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/hotelSelection/:guestsNo/:arrival/:departure" component={HotelSelection} />
            <Route  path="/hotel/:guestsNo/:hotelid/:arrival/:departure" component={Hotel} />
            <Route  path="/checkout/:hotelid/:guestsNo/:arrival/:departure" component={CheckoutPage} />
          </Switch>
   
    </div>
  );
}

export default App;
