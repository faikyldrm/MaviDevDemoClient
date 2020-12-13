import {
    MONITOR_TEXT
} from '../actions/types';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case MONITOR_TEXT:
            return { ...state, monitorText: action.payload }
        default:
            return state;
    }
};
