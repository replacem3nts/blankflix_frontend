import React from 'react'
import { fetchMovieDetails } from '../../services/Utils'
import { useState } from 'react'


export const AddMovie = () => {
    let [inputmovieurl, setInputmovieurl] = useState('')
    let [movieurl, setMovieurl] = useState('')
    let [movietitle, setMovietitle] = useState('')
    let [movieduration, setMovieduration] = useState('')
    let [moviesmallthumb, setMoviesmallthumb] = useState('')
    let [moviemedthumb, setMoviemedthumb] = useState('')
    let [movielrgthumb, setMovielrgthumb] = useState('')
    let [movieviewcount, setMovieviewcount] = useState('')
    let [errormsg, setErrormsg] = useState('')

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
                setMovieurl({url: inputmovieurl})
                setMovietitle({title: snippet.title})
                setMoviesmallthumb({smallthumb: snippet.thumbnails.default.url})
                setMoviemedthumb({medthumb: snippet.thumbnails.medium.url})
                setMovielrgthumb({lrgthumb: snippet.thumbnails.high.url})
                setMovieviewcount(parseInt({viewcount: statistics.viewCount}), 10)
                let timestring = contentDetails.duration.replace(/[^\d]+/g, "-").split("-").slice(1,3).join(":")
                setMovieduration({duration: timestring})
                setInputmovieurl('')
            } else {
                setErrormsg("Sorry! That movie isn't embeddable. Try another.")
            }
        } else {
            setErrormsg("Sorry! There was no result for that URL.")
        }
    }

    let handleAddMovie = (e) => {
        e.preventDefault()
        let movie = Object.assign({}, movieurl, movietitle, movieduration, moviesmallthumb, moviemedthumb, movielrgthumb, movieviewcount)
        console.log(movie)
    }

    return (
        <article>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={inputmovieurl}>Enter a movie url: </label><br/>
                    <input type='text' name='url' value={inputmovieurl} onChange={e => setInputmovieurl(e.target.value)}></input><br/>
                    <input type='submit' value='SUBMIT'/><br/>
                    {errormsg ? <p>{errormsg}</p> : null}
                </form>
            </section>
            {movietitle
                ?
                <section>
                    <img src={moviemedthumb.medthumb} alt={movietitle.title}/>
                    <h3>{movietitle.title}</h3>
                    <p>View Count: {movieviewcount.viewCount}</p>
                    <p>Duration: {movieduration.duration}</p>
                    <button onClick={handleAddMovie}>Add to Movies</button>
                </section>
                :
                null
            }
            
        </article>
    )
}
