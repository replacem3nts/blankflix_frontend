import React from 'react'
import { useSelector } from 'react-redux'
import { ChannelPrev } from '../components/loggedin/ChannelPrev'
import { DisplayThumb } from '../components/loggedin/DisplayThumb'


export const ChannelContainer = () => {
    let {movies, movie_channels} = useSelector(state => state)
    let channelArray = movie_channels.map(channel => {
        return <ChannelPrev key={channel.id} {...channel} />
    })
    let allMovies = movies.map(movie => {
        return <DisplayThumb key={movie.id} {...movie}/>
    })

    return (
        <>
            <section>
                    <div className='channel-container'>
                        <h4 className='channel-header'>All Movies</h4>
                        <div className='thumb-container'>{allMovies}</div>
                    </div>
            </section>
            {channelArray}
        </>
    )
}
