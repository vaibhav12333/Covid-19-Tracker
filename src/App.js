import logo from './logo.svg';
import React,{useState, useEffect} from 'react'
import './App.css';
import { fetchData,fetchStateData } from './api/';
import Home from "./Pages/Homepage"
import Auth from "./Pages/Authentication"
import Appointment from "./Pages/BookAppointment/index" 
import {Routes,Link,Route,Navigate} from "react-router-dom"
function App() {
useEffect(() =>{<Navigate to='/' />},[])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}/>
       
        <Route path='/auth' element={<Auth />}/>
        <Route path='/appointment' element={<Appointment />}/>
        {/* <Redirect path='/'>
          <Home />
        </Redirect> */}
      </Routes>
     

    </div>
  );
}

export default App;
