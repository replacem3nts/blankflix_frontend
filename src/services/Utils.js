const BACKEND_USERS = 'http://127.0.0.1:3001/api/v1/users'
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

// YouTube Search fetches below here:

export const fetchMovieDetails = (movieId) => {
    return fetch(YOUTUBE_SEARCH_BY_ID+`${movieId}&key=`+process.env.REACT_APP_YOUTUBE_API_KEY)
        .then(r => r.json())
}
