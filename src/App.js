import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Loader from './Components/Loader/Loader';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
// import ParticlesComponent from './Components/Particles/particles';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import {
  Routes,
  Route,
} from "react-router-dom";
// import Video from './Components/Video/Video';

function App() {

  //Loader
  const [isLoading, setIsLoading ] = useState(true);
  useEffect(()=>{
    const startLoader = () =>{
      setTimeout(() =>{
        setIsLoading(false);
      },5800)
    }
    startLoader();
  },[]);

  return isLoading ? (<Loader />) :
  (
    <div className='bg-black'>
       <div>
          {/* <ParticlesComponent id="particles"/> */}
          <Navbar/>
        </div>
        <Routes>
          <Route path ="/" element={<HomePage />}/>
          <Route path ="/about" element={<About />}/>
          <Route path ="/login" element={<Login />}/>
          <Route path ="/services" element={<Services />}/>
          <Route path ="/team" element={<Team />}/>
          {/* <Route path ="/video" element={<Video />}/> */}
        </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
