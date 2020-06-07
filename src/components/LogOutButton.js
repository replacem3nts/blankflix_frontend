import React from 'react'
import { useDispatch } from 'react-redux'
import { logUserOut } from '../actions/users'
import { useHistory } from 'react-router-dom'

export const LogOutButton = () => {
    let dispatch = useDispatch()
    let history = useHistory()

    let handleLogout = () => {
        dispatch(logUserOut())
        history.push('/')
    }
    return (
        <div id="auth-form-button" onClick={handleLogout}>LOGOUT</div>
    )
}
