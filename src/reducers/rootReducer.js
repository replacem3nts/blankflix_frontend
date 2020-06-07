const initialState = {
    id: '',
    username: '',
    appname: '',
    movies: [],
    token: ''
  }

export default function mainReducer(state = initialState, action) {
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
            let newMovieArray = [...state.movies, action.response.movie]
            console.log(newMovieArray)
            return 
        default:
            return state
    }
}