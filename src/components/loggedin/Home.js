import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayThumb } from './DisplayThumb'

export const Home = () => {
    let movies = useSelector(state => state.movies)
    let movieArray = movies.map(movie => {
        return <DisplayThumb key={movie.id} {...movie}/>
    })
    return (
        <article className='home-screen'>
            <section><h2>Welcome!</h2></section>
            <section className='home-thumb-display'>{movieArray}</section>
        </article>
    )
}
