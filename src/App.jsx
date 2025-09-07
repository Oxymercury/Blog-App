import authService from './appwrite/auth';
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import config from './Confi/confi.js';
import { Outlet } from 'react-router-dom';


function App() {
  const [Loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){

        // doesnt make any sense if user data hoga ki nahi toh login kyu karwana hai 
        dispatch(login({userData}))
      }
      else{
        // if userdata nahi hai toh atleast hum logout hi karwa dete hai kyuki ek state toh rahega na show karne ke liye ki abhi login status hai ky
        dispatch(logout())
      }
      
    })
    .finally(() => setLoading(false))  
  },[])

  // Finally isliye lagaye taki abb loading band kar de hum 
 

  return !Loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
