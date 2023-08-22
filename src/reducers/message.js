// reducers serves as event listener 
//Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

// rules of reducersar
// They should only calculate the new state value based on the state and action arguments
// They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
// They must not do any asynchronous logic or other "side effects" e.g loggin to console , async functions , AJAX , modifying other states or generating random IDs



import {
    SET_MESSAGE,
    CLEAR_MESSAGE
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case SET_MESSAGE:
            return {
                message: payload
            };

        case CLEAR_MESSAGE:
            return {
                message: ""
            };

        default:
            return state;
    }
}