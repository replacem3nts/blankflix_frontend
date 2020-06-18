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

export const removeMovie = movieID => {
    return {
        type: 'REMOVE_MOVIE',
        movieID
    }
}

export const updateChannels = movie_channels => {
    return {
        type: 'UPDATE_CHANNELS',
        movie_channels
    }
}

export const addChannel = channel => {
    return {
        type: 'ADD_CHANNEL',
        channel
    }
}