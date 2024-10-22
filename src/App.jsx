import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Map from "./Map.jsx";
import About from "./About.jsx";


import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/About" element={<About />} />
     
    </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App
