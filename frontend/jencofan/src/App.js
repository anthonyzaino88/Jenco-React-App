import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { Route, Routes } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CeilingCabientFans from './pages/CeilingCabientFans';

import CentrifugalFilteredSupplyFans from './pages/CentrifugalFilteredSupplyFans';
import ERV from './pages/ERV';
import GravityVents from './pages/GravityVents';
import HVLSF from './pages/HVLSF';
import ILSDF from './pages/ILSDF';
import Jetfans from './pages/Jetfans';
import KitchenHoods from './pages/KitchenHoods';
import OAMDK from './pages/OAMDK';
import PremiumChoice from './pages/PremiumChoice';
import ReFresh from './pages/ReFresh';
import RPF from './pages/RPF';
import SPF from './pages/SPF';
import TF from './pages/TF';
import UVS from './pages/UVS';
import CRWF from './pages/CRWF';
import About from './pages/About';


const App = () => {

    const {theme} = useSelector(state => state.ui);
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
 
  return <ThemeProvider theme={currentTheme}>
  <GlobalStyles/>
  <Helmet>
<title>JencoFan</title>
  </Helmet>
  <>
<Layout>

       <Routes>
        <Route path="/" element={<Home/>}  exact />
        <Route path="/products" element={<Products/>}  exact />
        <Route path="/Ceiling-Cabinet-Fans" element={<CeilingCabientFans/>} exact />
        <Route path="/Centrifugal-Filtered-Supply-Fans" element={<CentrifugalFilteredSupplyFans/>} exact />
        <Route path="/Centrifugal-Roof-Wall-Fans" element={<CRWF/>} exact />
        <Route path="/Energy-Recovery-Ventilators" element={<ERV/>} exact />
        <Route path="/Gravity-Vents" element={<GravityVents/>} exact />
        <Route path="/High-Volume-Low-Speed-Fans" element={<HVLSF/>} exact />
        <Route path="/In-line-and-Sidewall-Duct-Fans" element={<ILSDF/>} exact />
        <Route path="/Jet-Fans" element={<Jetfans/>} exact />
        <Route path="/Kitchen-Hoods" element={<KitchenHoods/>} exact />
        <Route path="/Outside-Air-Motorized-Damper-Kit" element={<OAMDK/>} exact />
        <Route path="/Premium-Choice" element={<PremiumChoice/>} exact />
        <Route path="/reFresh" element={<ReFresh/>} exact />
        <Route path="/Roof-Propeller-Fans" element={<RPF/>} exact />
        <Route path="/Sidewall-Propeller-Fans" element={<SPF/>} exact />
        <Route path="/Tubeaxial-Fans" element={<TF/>} exact />
        <Route path="/Utility-Vent-Sets" element={<UVS/>} exact />
        <Route path="/about-us" element={<About/>} exact />
       </Routes>
</Layout>
      
  </>
  </ThemeProvider>
}

export default App
