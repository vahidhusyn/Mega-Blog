import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { Navigate, useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            navigate(`/`)
            dispatch(logout())
            
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-highlight text-textColor rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn