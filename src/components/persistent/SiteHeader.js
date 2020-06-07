import React from 'react'
import { useSelector } from 'react-redux'
import { AuthButton } from '../AuthButton'
import { LogOutButton } from '../LogOutButton'
import { NavLink } from 'react-router-dom'

export const SiteHeader = () => {
    let appname = useSelector(state => state.appname)
    let token = useSelector(state => state.token)
    return (
        <span id='inner-header'>
            <h1 id='site-title'>{!!appname ?
                <NavLink to='/'>{`${appname}FLIX`}</NavLink>
                : 
                <NavLink to='/'>{'[blank]FLIX'}</NavLink>
                }</h1>
            {!!token 
                ?
                <LogOutButton/>
                :
                <AuthButton formpath={'signin'} formname={'SIGN IN'}/>
            }
        </span>
    )
}