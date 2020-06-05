import React from 'react'
import { useState } from 'react'

export const AuthForm = ({formName, handleSubmit}) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let handleFormSubmit = (e) => {
        e.preventDefault()
        let credentials = {username, password}
        console.log(credentials)
    }

    let handleChange = ({target}) => {
        let {name, value} = target
        name === 'username' ? setUsername(value) : setPassword(value)
    }

    return (
        <article>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <h3>{formName}</h3>
                    <label htmlFor={username} hidden={true}>Username: </label>
                    <input type='text' autoComplete='off' name='username' value={username} onChange={handleChange}></input><br/>
                    <label htmlFor={password} hidden={true}>Password: </label>
                    <input type='text' autoComplete='off' name='password' value={password} onChange={handleChange}></input><br/>
                    <input type='submit' value='SUBMIT'/>
                </form>
            </section>
        </article>
    )
}
