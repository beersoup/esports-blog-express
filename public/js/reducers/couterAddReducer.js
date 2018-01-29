import { ADD } from '../actions';

const initialState = {
    counter: 0
}

export default function(state, action) {
    if(typeof state === "undefined") {
        return initialState;
    }

    switch (action.type) {
        case ADD:
            return Object.assign( {}, state, { counter: state.counter + 1 });
        default:
            return state;
    }
}