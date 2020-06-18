import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayThumb } from './DisplayThumb'

export const Channel = ({id, name, user_movies}) => {
    let {movies} = useSelector(state => state)
    let channelMovies = movies.filter(movie => user_movies.includes(movie.id))

    let movieArray = channelMovies.map(movie => {
        return (
            <div className='display-channnel-movies'>
                <DisplayThumb key={movie.id} {...movie}/>
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
