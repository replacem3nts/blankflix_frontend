import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../actions/users'
import { fetchUpdateUser } from '../../services/Utils'

export const Profile = () => {
    let currentState = useSelector(state => state)
    let [username, setUsername] = useState(currentState.username)
    let [appname, setAppname] = useState(currentState.appname)
    let [errorMsg, setErrormsg] = useState('')
    let [edit, setEdit] = useState(false)
    let dispatch = useDispatch()

    let handleFormSubmit = (e) => {
        e.preventDefault()
        handleUpdateFetch()
    }

    let handleUpdateFetch = () => {
        let newUser = Object.assign({}, {username}, {appname})
        fetchUpdateUser(newUser, localStorage.token)
            .then(user => {
                if(user.message){
                    return setErrormsg(user.message)
                } else {
                    dispatch(addUser(user))
                    setEdit(edit => !edit)
                }
            })
    }

    let handleEdit = (e) => {
        e.preventDefault()
        setEdit(edit => !edit)
    }

    let handleChange = ({target}) => {
        let {name, value} = target
        switch(name){
            case 'username':
                return setUsername(value)
            default:
                return setAppname(value)
        }
    }

    return (
        <article>
            {edit ? 
                <section>
                    <form onSubmit={handleFormSubmit}>
                        <h2>Username: </h2>
                        <label htmlFor={username} hidden={true}>Username: </label>
                        <input type='text' autoComplete='off' name='username' value={username} onChange={handleChange}></input><br/><br/>
                        <h2>App Name: </h2>
                        <label htmlFor={appname} hidden={true}>Name of Your App: </label>
                        <input type='text' autoComplete='off' name='appname' value={appname} onChange={handleChange}></input><br/><br/>
                        <input type='submit' value='SAVE'/>
                    </form>
                    {errorMsg ? <p>{errorMsg}</p> : null}
                </section>
                :
                <section>
                    <h2>Username: </h2>
                    {username}
                    <h2>App Name: </h2>
                    {appname}
                </section>
            }
            <br/><br/><button onClick={handleEdit}>{edit ? 'Cancel' : 'Edit'}</button>
        </article>
    )
}