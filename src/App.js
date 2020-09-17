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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const JourneyContext = createContext();
export const BookingContext = createContext();
export const UserContext = createContext();

function App() {
  const [selectedPlace, setSelectedPlace] = useState(fakeData[0].place);
  const [proceedToBooking, setProceedToBooking] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    success: null, 
    error: '',
  });

  return (
    <JourneyContext.Provider value={[selectedPlace, setSelectedPlace]} className="app">
      <BookingContext.Provider value={[proceedToBooking, setProceedToBooking]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/hotel">
                <Hotel></Hotel>
              </PrivateRoute>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NoMatch></NoMatch>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </BookingContext.Provider>
    </JourneyContext.Provider>
  );
}

export default App;
