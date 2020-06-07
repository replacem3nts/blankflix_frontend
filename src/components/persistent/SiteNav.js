import React from 'react'
import { NavLink } from 'react-router-dom'

export const SiteNav = (props) => {
    return (
        <span className='footer-navlink'><NavLink to={`/${props.path}`}>{props.pathname}</NavLink></span>
    )
}