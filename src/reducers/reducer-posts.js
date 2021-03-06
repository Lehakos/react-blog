import { FETCH_POSTS, FETCH_POST_DETAILS } from 'actions';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {

    case FETCH_POSTS:
        return { ...state, all: action.payload.data };

    case FETCH_POST_DETAILS:
        return { ...state, current: action.payload.data };

    default:
        return state;
    }
}
