import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Clubs } from './components/Clubs';
import { AboutPage } from './components/AboutPage';

function App() {
  return <div className='App'>
    <NavBar />
    <Banner />
    <Clubs />
    <AboutPage />
  </div>;
}

export default App
