import React from 'react'
import ParticlesComponent from '../Particles/particles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import About from '../About/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Team from '../Team/Team'
import Login from '../Login/Login'
import Services from '../Services/Services'

const Routers = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About/> },
    { path: "/team", element: <Team/> },
    { path: "/services", element: <Services/> },
    { path: "/login", element: <Login/> },
    
  ]);
  return routes;
};
const UserRouter = () => {
  
  return (
    <div>
      <Router>
          <Routers/>
        </Router>      
    </div>
  )
}

export default UserRouter
