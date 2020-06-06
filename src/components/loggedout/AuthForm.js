import React from 'react'
import { useState } from 'react'
import { fetchCreateUser, fetchLogin } from '../../services/Utils'
import { useDispatch } from 'react-redux'
import { addUser } from '../../actions/users'

export const AuthForm = (props) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let dispatch = useDispatch()

    let handleFormSubmit = (e) => {
        e.preventDefault()
        let credentials = {username, password}
        fetchLogin(credentials)
            .then(response => handleResponse(response))
    }

    let handleResponse = resp => {
        localStorage.token = resp.token
        let userToSet = {...resp.user, token: resp.token}
        dispatch(addUser(userToSet))
    }

    let handleChange = ({target}) => {
        let {name, value} = target
        name === 'username' ? setUsername(value) : setPassword(value)
    }

    return (
        <article>
            <section>
                {console.log()}
                <form onSubmit={handleFormSubmit}>
                    <h3>{props.formName}</h3>
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
