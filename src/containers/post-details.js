import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPostDetails, deletePost } from 'actions';
import { Link, withRouter } from 'react-router';

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        const { params, fetchPostDetails, post } = this.props;

        if (post && post.id === parseInt(params.id, 10)) {
            return;
        }

        fetchPostDetails(params.id);
    }

    onDeleteClick() {
        const { deletePost, params, router } = this.props;

        deletePost(params.id)
            .then(() => router.push('/'));
    }

    render() {
        const { post, params } = this.props;

        if (!post || post.id != parseInt(params.id, 10)) {
            return <div>Loading post...</div>
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

PostDetails = withRouter(PostDetails);

const mapStateToProps = (state) => {
    return {
        post: state.posts.current
    }
}

export default connect(mapStateToProps, { fetchPostDetails, deletePost })(PostDetails);
