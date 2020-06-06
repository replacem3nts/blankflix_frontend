export default function mainReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_USER':
            console.log(action.user)
            console.log(state)
            return [...state, action.user]
        default:
            return state
    }
}