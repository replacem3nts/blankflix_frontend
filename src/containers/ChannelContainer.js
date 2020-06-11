import React from 'react'
import { useSelector } from 'react-redux'
import { Channel } from '../components/loggedin/Channel'
import uuid from 'react-uuid'


export const ChannelContainer = () => {
    let {movies, movie_channels} = useSelector(state => state)
    let channelArray = movie_channels.map(channel => {
        return <Channel key={channel.id} chMovies={channel.user_movies} name={channel.name}/>
    })
    let allMoviesIds = movies.map(movie => movie.id)
    channelArray.unshift(<Channel key={uuid()} chMovies={allMoviesIds} name='All Movies'/>)
        

    return <>{channelArray} </>
}
