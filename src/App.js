import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import fakeData from './fakeData/fakeData';

export const JourneyContext = createContext();
export const BookingContext = createContext();

function App() {
  const [selectedPlace, setSelectedPlace] = useState(fakeData[0].place);
  const [proceedToBooking, setProceedToBooking] = useState(false);

  return (
    <JourneyContext.Provider value={[selectedPlace, setSelectedPlace]} className="app">
      <BookingContext.Provider value={[proceedToBooking, setProceedToBooking]}>
        <Header></Header>
        <Home></Home>
      </BookingContext.Provider>
    </JourneyContext.Provider>
  );
}

export default App;
