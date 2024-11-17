import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import SignUp from './component/sign/Sign';
import InstagramAuth from '../InstagramAuth';
import Planning from './component/planning/Planning';
import Detail from './component/detailofcity/Detail';
import Header from './component/header/Header';
import Footer from './component/Footer/Footer';
import Hotels from './component/pages/Hotels';
import ThingsToDo from './component/pages/ThingsaToDo';
import Restaurants from './component/pages/Resturant';
import Flights from './component/pages/Flights';
import Holidays from './component/pages/Holidays';
import DetailPage from './component/detailofcity/Detail';

const App = () => {

  useEffect(() => {
    async function fetchData() {
      
    
    console.log(import.meta.env.VITE_API_URL)
    try{
     const response = await fetch(`${import.meta.env.VITE_API_URL}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log(result);
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }
    fetchData();
  }, []);

  return (
    <Router>
      <Header /> {/* Header always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/instagram-auth" element={<InstagramAuth />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
};

export default App;
