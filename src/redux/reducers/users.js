import * as type from '../types'

const initiialState = {
    users: [],
    loading: false,
    error: null
}

export default function  users(state = initiialState, action) {
    switch(action.type) {
        case type.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_USERS_SUCCESS:
            console.log(action);
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case  type.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}