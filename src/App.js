import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import HotelSelection from './Components/HotelSelection/HotelSelection';
import Hotel from './Components/Hotel/Hotel';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App">
      <button onClick={()=>window.location.href='/'}> Return to Homepage</button> <br/>

    
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
