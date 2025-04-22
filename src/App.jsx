import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Clubs } from './components/Clubs';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { FooterDown } from './components/FooterDown';
import { TeamPage } from './components/TeamPage';
import { Slider } from './components/Slider';

function App() {
  return <div className='App'>
    <NavBar />
    <Banner />
    <Clubs />
    <AboutPage />
    <TeamPage />
    <Slider />
    <Footer />
    <FooterDown />
  </div>;
}

export default App
