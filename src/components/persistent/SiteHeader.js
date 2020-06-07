import React from 'react'
import { useSelector } from 'react-redux'
import { AuthButton } from '../AuthButton'
import { LogOutButton } from '../LogOutButton'

export const SiteHeader = () => {
    let appname = useSelector(state => state.appname)
    let token = useSelector(state => state.token)
    return (
        <span id='inner-header'>
            <h1>{!!appname ? `${appname}FLIX` : '[blank]FLIX'}</h1>
            {!!token 
                ?
                <LogOutButton/>
                :
                <AuthButton formpath={'signin'} formname={'SIGN IN'}/>
            }
        </span>
    )
}