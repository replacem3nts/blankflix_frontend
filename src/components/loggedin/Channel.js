import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DisplayThumb } from './DisplayThumb'
import { fetchRemoveMovie } from '../../services/Utils'
import { addChannel } from '../../actions/users'

export const Channel = ({id, name, user_movies}) => {
    let {movies} = useSelector(state => state)
    let channelMovies = movies.filter(movie => user_movies.includes(movie.id))
    let dispatch = useDispatch()

    let handleRemove = (e) => {
        e.preventDefault()
        let {name} = e.target
        let movieToRemove = {movie_id: name, channel_id: id}
        fetchRemoveMovie(movieToRemove, localStorage.token)
    }

    let movieArray = channelMovies.map(movie => {
        return (
            <div className='display-channnel-movies' key={movie.id}>
                <DisplayThumb {...movie}/>
                <button className='small-button' name={movie.id} onClick={handleRemove}>REMOVE</button>
            </div>
        )
    })

    return (
        <article className='channel-display'>
            <h4 className='channel-header'>{name}</h4>
            <section className='channel-movie-container'>
                {movieArray}
            </section>
        </article>
    )
}
