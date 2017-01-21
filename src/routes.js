import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app';
import PostsIndex from 'containers/posts-index';
import PostNew from 'containers/post-new';
import PostDetails from 'containers/post-details';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostNew} />
        <Route path="posts/:id" component={PostDetails} />
    </Route>
);
