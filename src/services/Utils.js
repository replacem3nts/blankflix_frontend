const BACKEND_USERS = 'http://127.0.0.1:3001/api/v1/users'
const BACKEND_MOVIES = 'http://127.0.0.1:3001/api/v1/movies'
const YOUTUBE_SEARCH_BY_ID = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id='

// Backend user fetches
export const fetchCreateUser = (user) => {
    return fetch(BACKEND_USERS, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)})
        .then(r => r.json())
    }
    
export const fetchLogin = (user) => {
    return fetch(BACKEND_USERS+'/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)})
            .then(r => r.json())
}

export const fetchPersistLogin = (token) => {
    return fetch(BACKEND_USERS+'/persist_login', {
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(r => r.json())
}

export const fetchUpdateUser = (user, token) => {
    return fetch(BACKEND_USERS, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(r => r.json())
}

// Backend movie fetches

export const fetchCreateMovie = (movie, token) => {
    return fetch(BACKEND_MOVIES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(movie)
    })
        .then(r => r.json())
}

export const fetchDestroyMovie = (movieID, token) => {
    return fetch(BACKEND_MOVIES+`/${movieID}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    })
        .then(r => r.json())
}

// YouTube fetches

export const fetchMovieDetails = (movieId) => {
    return fetch(YOUTUBE_SEARCH_BY_ID+`${movieId}&key=`+process.env.REACT_APP_YOUTUBE_API_KEY)
        .then(r => r.json())
}
