import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListChannel } from '../components/loggedin/ListChannel'


export const ManageChannels = () => {
    let channels = useSelector(state => state.movie_channels)
    let [edit, setEdit] = useState(false)
    let [newChannel, setNewChannel] = useState('')
    let channelArray = channels.map(channel => <ListChannel key={channel.id} {...channel}/>)


    let handleEdit = (e) => {
        e.preventDefault()
        setEdit(edit => !edit)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(newChannel)
    }

    return (
        <article>
            <h2>My Channels</h2>
            <section>
                <ul>{channelArray}</ul>
            </section>
            <section>
                {edit
                    ?
                    <form onSubmit={handleSubmit}>
                        <label type='hidden' value='Channel Name'/>
                        <input type='text' value={newChannel} onChange={e => setNewChannel(e.target.value)}></input>
                        <input type='submit' value='SUBMIT'/>
                    </form>
                    :
                    <button onClick={handleEdit}>Add New Channel</button>
                }
            </section>
        </article>
    )
}
