import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import fakeData from './fakeData/fakeData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';
import NoMatch from './components/NoMatch/NoMatch';

export const JourneyContext = createContext();
export const BookingContext = createContext();

function App() {
  const [selectedPlace, setSelectedPlace] = useState(fakeData[0].place);
  const [proceedToBooking, setProceedToBooking] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <JourneyContext.Provider value={[selectedPlace, setSelectedPlace]} className="app">
      <BookingContext.Provider value={[proceedToBooking, setProceedToBooking]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/hotel">
              <Hotel></Hotel>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </BookingContext.Provider>
    </JourneyContext.Provider>
  );
}

export default App;
