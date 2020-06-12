import React from 'react'
import { useState } from 'react-redux'

export const MovieDetails = ({title}) => {
    let [edit, setEdit] = useState(false)

    let handleEdit = (e) => {
        e.preventDefault()
        setEdit(edit => !edit)
    }

    return (
        <>
            {edit ?
                <h3></h3>
                :
                null
            }
            <button onClick={handleEdit}>{edit ? 'Cancel' : 'Edit'}</button><br/><br/>
        </>
    )
}
