import React from 'react'
import { DisplayThumb } from './DisplayThumb'
import { useSelector } from 'react-redux'

export const Channel = ({name, chMovies}) => {
    let {movies} = useSelector(state => state)
    let channelMovies = movies.filter(movie => chMovies.includes(movie.id))
    let movieArray = channelMovies.map(movie => {
        return <DisplayThumb key={movie.id} {...movie}/>
    })
    return (
        <section>
            <div className='channel-container'>
                <h4>{name}</h4>
                <div className='thumb-container'>{movieArray}</div>
            </div>
        </section>
    )
}
