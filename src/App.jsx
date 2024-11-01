import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Map from "./Map.jsx";
import About from "./About.jsx";
import Navbar from "./components/Navbar";
import Donate from './Donate.jsx';
import Volunteer from './Volunteer.jsx';
import Volmaploc from './Volmaploc.jsx';
import Registration from './Registration.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/SignUp" element={<SignUp />}/>
      <Route path="/Map" element={<Map />} />
      <Route path="/About" element={<About />} />
      <Route path="/Donate" element={<Donate />} />
      <Route path="/Volunteer" element={<Volunteer />} />
      <Route path="/Volmaploc" element={<Volmaploc />} />
     
    </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App
