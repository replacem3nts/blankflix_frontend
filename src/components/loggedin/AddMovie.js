import React from 'react'
import { fetchMovieDetails, fetchCreateMovie } from '../../services/Utils'
import { useState } from 'react'
import { addMovie } from '../../actions/users'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


export const AddMovie = () => {
    let [inputmovieurl, setInputmovieurl] = useState('')
    let [movie, setMovie] = useState([])
    let [errormsg, setErrormsg] = useState('')
    let dispatch = useDispatch()
    let history = useHistory()

    let handleSubmit = (e) => {
        e.preventDefault()
        let parseObj = Object.assign({}, {inputmovieurl})
        let movieId = parseObj.inputmovieurl.split('=')[1]
        fetchMovieDetails(movieId)
            .then(response => {
                handleResponse(response)
            })
    }

    let handleResponse = (resp) => {
        if (resp.items[0]) {
            let {contentDetails, snippet, statistics, status} = resp.items[0]
            if (status.embeddable) {
                let viewcount = parseInt(statistics.viewCount, 10)
                let timestring = contentDetails.duration.replace(/[^\d]+/g, "-").split("-").slice(1,3).join(":")
                let newMovie = Object.assign({}, 
                    {url: inputmovieurl}, 
                    {title: snippet.title}, 
                    {smallthumb: snippet.thumbnails.default.url}, 
                    {medthumb: snippet.thumbnails.medium.url}, 
                    {lrgthumb: snippet.thumbnails.high.url}, 
                    {viewcount: viewcount},
                    {duration: timestring})
                setMovie(newMovie)
                setInputmovieurl('')
            } else {
                setErrormsg("Sorry! That movie isn't embeddable. Try another.")
            }
        } else {
            setErrormsg("Sorry! There was no result for that URL.")
        }
    }
    
    let handleAddMovieClick = (e) => {
        e.preventDefault()
        fetchCreateMovie(movie, localStorage.token)
            .then(resp => {
                if (resp.message) {
                    setErrormsg(resp.message)
                } else {
                    dispatch(addMovie(resp.movie))
                    let {id} = resp.movie
                    history.push(`/movie/${id}`)
                }
            })
    }
    
    return (
        <article>
        {console.log(movie)}
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={inputmovieurl}>Enter a movie url: </label><br/>
                    <input type='text' name='url' value={inputmovieurl} onChange={e => setInputmovieurl(e.target.value)}></input><br/>
                    <input type='submit' value='SUBMIT'/><br/>
                    {errormsg ? <p>{errormsg}</p> : null}
                </form>
            </section>
            {movie.title
                ?
                <section>
                    <img src={movie.medthumb} alt={movie.title}/>
                    <p>View Count: {movie.viewCount}</p>
                    <p>Duration: {movie.duration}</p>
                    <h3>{movie.title}</h3>
                    <button onClick={handleAddMovieClick}>Add to Movies</button>
                </section>
                :
                null
            }
        </article>
    )
}
