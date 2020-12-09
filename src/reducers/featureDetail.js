import {
    FETCH_FEATUREDETAIL
} from '../actions/types';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_FEATUREDETAIL:
            return { ...state, detailPageFeatures: action.payload }
        default:
            return state;
    }
};
