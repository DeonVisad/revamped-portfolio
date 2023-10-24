
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Work from './Pages/Work/Work';
import PlayMusic from './Components/PlayMusic';
import ScrollTop from './Components/ScrollTop';
import About from './Pages/About/About.jsx'
import Socials from './Components/Socials';



function App() {
  const location = useLocation();
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Socials />
      <PlayMusic />
      <ScrollTop />
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
