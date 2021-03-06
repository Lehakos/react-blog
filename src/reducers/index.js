import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: FormReducer
});

export default rootReducer;
