const BACKEND_USERS = 'http://127.0.0.1:3001/api/v1/users'

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

export const persistLogin = (token) => {
    return fetch(BACKEND_USERS+'/persist_login', {
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(r => r.json())
}

