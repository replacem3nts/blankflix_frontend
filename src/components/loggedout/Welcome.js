import React from 'react'
import { AuthButton } from '../AuthButton'

export const Welcome = () => {
    return (
        <div>
            HELLO FROM WELCOME
            <AuthButton formpath={'signup'} formname={'SIGN UP'}/>
        </div>
    )
}
