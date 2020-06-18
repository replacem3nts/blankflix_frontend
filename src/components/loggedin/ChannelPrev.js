import React from 'react'
import { DisplayThumb } from './DisplayThumb'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ChannelPrev = ({id, name, user_movies}) => {
    let {movies} = useSelector(state => state)
    let channelMovies = movies.filter(movie => user_movies.includes(movie.id))
    let movieArray = channelMovies.map(movie => {
        return <DisplayThumb key={movie.id} {...movie}/>
    })
    return (
        <section>
            <div className='channel-movie-container'>
                <Link className='channel-header' to={`/channel/${id}`}>{name}</Link><br/><br/>
                <div className='thumb-container'>{movieArray}</div>
            </div>
        </section>
    )
}
