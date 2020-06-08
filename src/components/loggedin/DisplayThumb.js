import React from 'react'
import { useHistory } from 'react-router-dom'

export const DisplayThumb = ({smallthumb, title, id}) => {
    let history = useHistory()

    let handleThumbClick = () => {
        history.push(`/movie/${id}`)
    }
    return (
        <span onClick={handleThumbClick}>
            <img src={smallthumb} alt={title}/>
            <p>{title}</p>
        </span>
    )
}
