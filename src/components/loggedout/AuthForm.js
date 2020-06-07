import React from 'react'
import { useState } from 'react'
import { fetchCreateUser, fetchLogin } from '../../services/Utils'
import { useDispatch } from 'react-redux'
import { addUser } from '../../actions/users'
import { useHistory } from 'react-router-dom'

export const AuthForm = (props) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [appname, setAppname] = useState('')
    let [errorMsg, setErrormsg] = useState('')
    let dispatch = useDispatch()
    let history = useHistory()

    let handleFormSubmit = (e) => {
        e.preventDefault()
        handleAuthFetch()
    }
    
    let handleAuthFetch = () => {
        let creds = {username, password, appname}
        props.formName === 'Sign Up' ?  handleCreate(creds) : handleLogin(creds) 
            
    }

    let handleLogin = (creds) => {
        fetchLogin(creds)
        .then(user => {
            if(user.message){
                return setErrormsg(user.message)
            } else {
                dispatch(addUser(user))
                history.push('/')
            }
        })
    }
    
    let handleCreate = (creds) => {
        fetchCreateUser(creds)
        .then(user => {
            if(user.message){
                return setErrormsg(user.message)
            } else {
                dispatch(addUser(user))
                history.push('/')
            }
        })
    }

    let handleChange = ({target}) => {
        let {name, value} = target
        switch(name){
            case 'username':
                return setUsername(value)
            case 'password':
                return setPassword(value)
            default:
                return setAppname(value)
        }
    }

    return (
        <article>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <h2>{props.formName}</h2>
                    <label htmlFor={username} hidden={true}>Username: </label>
                    <input type='text' autoComplete='off' name='username' value={username} onChange={handleChange} placeholder='Enter username'></input><br/><br/>
                    <label htmlFor={password} hidden={true}>Password: </label>
                    <input type='password' autoComplete='off' name='password' value={password} onChange={handleChange} placeholder='Enter password'></input><br/><br/>
                    {props.formName === 'Sign Up' 
                    ?
                    <>
                        <label htmlFor={appname} hidden={true}>Name of Your App: </label>
                        <input type='text' autoComplete='off' name='appname' value={appname} onChange={handleChange} placeholder='Enter a name for your app'></input><br/><br/>
                    </>
                    :
                    null
                    }
                    <input type='submit' value='SUBMIT'/>
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </form>
            </section>
        </article>
    )
}
