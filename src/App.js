import React from 'react'; 
import './App.css';
import {Route, Routes} from "react-router";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"



function App() {
  return (
    <Routes>
      <Route path ='/' element={<Login />} />
      <Route path ='/Signup' element={<Signup />} />
      <Route path ='/Home' element={<Home />} />
    </Routes>
  );
}

export default App;
