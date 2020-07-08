import React from 'react'
import ReactPlayer from 'react-player'
import { fetchDestroyMovie } from '../../services/Utils'
import { removeMovie } from '../../actions/users'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const DisplayMovie = ({url, title, id}) => {
    let [errormsg, setErrormsg] = useState('')
    let dispatch = useDispatch()
    let history = useHistory()

    let handleDelete = (e) => {
        e.preventDefault()
        fetchDestroyMovie(id, localStorage.token)
            .then(resp => {
                if(resp.message) {
                    setErrormsg(resp.message)
                } else {
                    dispatch(removeMovie(resp.movie_id))
                    history.push('/')
                }
            })
    }

    return (
        <article>
            <section className='watch-container'>
                <ReactPlayer url={url} width='90%' controls={true}/>
            </section>
            <section>
                <p>{title}</p>
                <button className='small-button' onClick={handleDelete}>Delete Movie</button>
                {errormsg ? <p>{errormsg}</p> : null}
            </section>
        </article>
    )
}
