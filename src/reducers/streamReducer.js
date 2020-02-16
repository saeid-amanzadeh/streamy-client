import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAMS,
    CREATE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            console.log("here reducers...");
            return { ...state, ..._.mapKeys(action.payload, "id") };
        case FETCH_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        case DELETE_STREAMS:
            return _.omit( state, action.payload );
        default:
            return state;
    }
};
