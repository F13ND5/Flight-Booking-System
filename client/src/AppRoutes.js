import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LandingPageView from './pages/LandingPageView';
import FlightInfoPage from './pages/FlightInfoPage';

export default function AppRoutes(props){


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LandingPageView />} />
                <Route path='/view-flight-info' element = {<FlightInfoPage />} />
            </Routes>
        </BrowserRouter>
    )
}