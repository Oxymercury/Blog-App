import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice';
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => dispatch(logout()))
    }
  return (
    <div className='cursor-pointer inline-bock px-6 py-2 font-bold bg-red-500 text-xl duration-200 hover:bg-red-200 hover:text-gray-700 rounded-full ' onClick={logoutHandler}>Logout</div>
  )
}

export default LogoutBtn