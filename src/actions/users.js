export const addUser = user => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const logUserOut = () => {
    return {
        type: 'LOG_USER_OUT'
    }
}

export const addMovie = movie => {
    return {
        type: 'ADD_MOVIE',
        movie
    }
}