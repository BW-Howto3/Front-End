import {
    FETCHING_START,
    FETCHING_ERROR,
    // USER
} from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    user: {},
    howtos: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_START:
            console.log("FETCHING START ACTION", action.payload)
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCHING_ERROR:
            console.log("ERROR ACTION", action.payload)
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}