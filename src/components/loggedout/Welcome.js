import React from 'react'
import { AuthButton } from '../AuthButton'

export const Welcome = () => {
    return (
        <div className='centered-spaced'>
            <AuthButton formpath={'signup'} formname={'SIGN UP'}/>
        </div>
    )
}
