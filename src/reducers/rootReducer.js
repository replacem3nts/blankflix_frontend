const initialState = {
    id: '',
    username: '',
    appname: '',
    movies: [],
    movie_channels: [],
    token: ''
  }

export default function mainReducer(state = initialState, action) {
    let movies
    let channelHash
    switch(action.type) {
        case 'ADD_USER':
            let {user, token} = action.user
            let newState = {...user, token}
            localStorage.token = token
            return {...state, ...newState}
        case 'LOG_USER_OUT':
            localStorage.clear()
            return {...state, ...initialState}
        case 'ADD_MOVIE':
            let {movie} = action
            movies = [...state.movies, movie]
            return {...state, movies}
        case 'UPDATE_CHANNELS':
            channelHash = {movie_channels: action.movie_channels}
            return {...state, ...channelHash}
        case 'ADD_CHANNEL':
            let {channel} = action
            let newChannels = [...state.movie_channels, channel]
            channelHash = {movie_channels: newChannels}
            return {...state, ...channelHash}
        case 'REMOVE_MOVIE':
            movies = [...state.movies.filter(movie => movie.id !== parseInt(action.movieID, 10))]
            return {...state, movies}
        default:
            return state
    }
}