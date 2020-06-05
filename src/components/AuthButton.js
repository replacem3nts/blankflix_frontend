import React from 'react'
import { NavLink } from 'react-router-dom'

export const AuthButton = ({formpath, formname}) => <div id="auth-form-button"><NavLink to={`/${formpath}`}>{formname}</NavLink></div>