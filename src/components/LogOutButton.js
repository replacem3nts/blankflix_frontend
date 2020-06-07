import React from 'react'
import { useDispatch } from 'react-redux'
import { logUserOut } from '../actions/users'
import { NavLink } from 'react-router-dom'

export const LogOutButton = () => {
    let dispatch = useDispatch()

    let handleLogout = () => {
        dispatch(logUserOut())
    }
    return <div id="auth-form-button"><NavLink to='/' onClick={handleLogout}>LOGOUT</NavLink></div>
}
