import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListChannel } from '../components/loggedin/ListChannel'
import { fetchCreateChannel } from '../services/Utils'
import { addChannel } from '../actions/users'

export const ManageChannels = () => {
    let channels = useSelector(state => state.movie_channels)
    let [edit, setEdit] = useState(false)
    let [newChannel, setNewChannel] = useState('')
    let dispatch = useDispatch()
    let channelArray = channels.map(channel => <ListChannel key={channel.id} {...channel}/>)


    let handleEdit = (e) => {
        e.preventDefault()
        setEdit(edit => !edit)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let channel = {channel_name: newChannel}
        fetchCreateChannel(channel, localStorage.token)
            .then(resp => {
                dispatch(addChannel(resp.channel))
                setNewChannel('')
            })
    }

    return (
        <article className='home-screen'>
            <h2>My Channels</h2>
            <section>
                <ul className='channel-list'>{channelArray}</ul>
            </section>
            <section>
                {edit
                    ?
                    <form onSubmit={handleSubmit}>
                        <label type='hidden' value='Channel Name'/>
                        <input type='text' value={newChannel} onChange={e => setNewChannel(e.target.value)}></input>
                        <input className='small-button' type='submit' value='SUBMIT'/>
                    </form>
                    :
                    <button className='small-button' onClick={handleEdit}>Add New Channel</button>
                }
            </section>
        </article>
    )
}
