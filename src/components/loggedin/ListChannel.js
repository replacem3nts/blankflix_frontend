import React, { useState } from 'react'


export const ListChannel = ({id, name}) => {
    let [channelName, setChannelName] = useState(name)
    let [edit, setEdit] = useState(false)

    let handleEdit = (e) => {
        e.preventDefault()
        if(edit) {setChannelName(name)}
        setEdit(edit => !edit)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <li>
            {edit 
                ?
                <>
                    <form onSubmit={handleSubmit}>
                        <label type='hidden' value='Channel Name'/>
                        <input type='text' value={channelName} onChange={e => setChannelName(e.target.value)}></input>
                        <input type='submit' value='SUBMIT'/>
                    </form>
                    <button onClick={handleEdit}>CANCEL</button>
                </>
                :
                <div>
                    {channelName}
                    <button onClick={handleEdit}>EDIT NAME</button>
                    <button>DELETE</button>
                </div>
            }
        </li>
    )
}
