import React from 'react'
import { useSelector } from 'react-redux'
import { AuthButton } from '../AuthButton'

export const SiteHeader = () => {
    let sitename = useSelector(state => state.sitename)
    let token = useSelector(state => state.token)
    return (
        <>
            <h1>{!!sitename ? `${sitename}FLIX` : '[blank]FLIX'}</h1>
            {!!token 
                ?
                null
                :
                <AuthButton formpath={'signin'} formname={'SIGN IN'}/>
            }
        </>
    )
}