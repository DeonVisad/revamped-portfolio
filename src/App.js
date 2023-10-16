import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Work from './Pages/Work/Work';
import PlayMusic from './Components/PlayMusic';
import ScrollTop from './Components/ScrollTop';
import About from './Pages/About/About.jsx'
import Socials from './Components/Socials';



function App() {
  return (
    <div className='overflow-x-hidden'>
      <Socials />
      <PlayMusic />
      <ScrollTop />
      <Navbar />
      
      <Home />
      <Work />
    </div>
  );
}

export default App;
