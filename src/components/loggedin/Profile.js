import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser, logUserOut } from '../../actions/users'
import { fetchUpdateUser, fetchDestroyUser } from '../../services/Utils'
import { useHistory } from 'react-router-dom'

export const Profile = () => {
    let currentState = useSelector(state => state)
    let [username, setUsername] = useState(currentState.username)
    let [appname, setAppname] = useState(currentState.appname)
    let [errorMsg, setErrormsg] = useState('')
    let [edit, setEdit] = useState(false)
    let dispatch = useDispatch()
    let history = useHistory()

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

    let handleDelete = (e) => {
        e.preventDefault()
        fetchDestroyUser(localStorage.token)
            .then(resp => {
                if(resp.message) {
                    setErrormsg(resp.message)
                } else {
                    dispatch(logUserOut())
                    history.push('/')
                }
            })
    }

    let handleChannelLink = (e) => {
        e.preventDefault()
        history.push('/channels')
    }

    return (
        <article className='home-screen'>
            <h1>Profile</h1>
            {edit ? 
                <section>
                    <form onSubmit={handleFormSubmit}>
                        <h3>Username: </h3>
                        <label htmlFor={username} hidden={true}>Username: </label>
                        <input type='text' autoComplete='off' name='username' value={username} onChange={e => setUsername(e.target.vlue)}></input><br/>
                        <h3>App Name: </h3>
                        <label htmlFor={appname} hidden={true}>Name of Your App: </label>
                        <input type='text' autoComplete='off' name='appname' value={appname} onChange={e => setAppname(e.target.value)}></input><br/><br/>
                        <input className='small-button' type='submit' value='SAVE'/>
                    </form><br/><br/>
                </section>
                :
                <section>
                    <h3>Username: </h3>
                    {username}
                    <h3>App Name: </h3>
                    {appname}<br/><br/>
                </section>
            }
            <section>
                <button className='small-button' onClick={handleEdit}>{edit ? 'Cancel' : 'Edit'}</button><br/><br/>
                <button className='small-button' onClick={handleDelete}>DELETE ACCOUNT</button><br/><br/>
                <button className='small-button' onClick={handleChannelLink}>EDIT CHANNELS</button><br/><br/>
                {errorMsg ? <p>{errorMsg}</p> : null}
            </section>
        </article>
    )
}