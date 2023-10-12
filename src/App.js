import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Work from './Pages/Work/Work';
import PlayMusic from './Components/PlayMusic';



function App() {
  return (
    <div>
      <PlayMusic />
      <Navbar />
      
      <Home />
      <Work />
    </div>
  );
}

export default App;
