import { FETCH_DYNAMIC_BANNER } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_DYNAMIC_BANNER:
            return action.payload.data;
        default:
            return state;
    }
}