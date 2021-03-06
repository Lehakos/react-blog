import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const { posts } = this.props;

        return posts.map(post => (
            <li className="list-group-item" key={post.id}>
                <Link to={`posts/${post.id}`}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            </li>
        ));
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
