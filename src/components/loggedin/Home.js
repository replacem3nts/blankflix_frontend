import React from 'react'
import { ChannelContainer } from '../../containers/ChannelContainer'


export const Home = () => {
    return (
        <article className='home-screen'>
            <section><h2>Welcome!</h2></section>
            <ChannelContainer/>
        </article>
    )
}
