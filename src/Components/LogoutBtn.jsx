import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice';
function LogoutBtn() {
    const [isLogout,setisLogout] = useState(false);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        setisLogout(true);
        authService.logout().then(() => dispatch(logout()))
    }
  return (
    <div className={`cursor-pointer inline-bock px-6  font-bold flex justify-center text-md duration-200 hover:bg-red-500 hover:text-gray-900 rounded-md ${isLogout ? "opacity-70 cursor-not-allowed" : ""}`} onClick={logoutHandler}>
    {isLogout && (
        <svg
          className="w-5 h-5 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
    <span >{isLogout ? "" : "Logout"}</span></div>
  )
}

export default LogoutBtn