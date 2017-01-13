import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app';
import PostsIndex from 'containers/posts-index';
import PostNew from 'containers/post-new';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostNew} />
    </Route>
);
