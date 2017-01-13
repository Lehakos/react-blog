import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from 'actions';
import { Link, withRouter } from 'react-router';
import cn from 'classnames';

function renderField({ Tag = 'input', input, label, type, meta: { touched, error, warning, invalid } }) {
    const rootClasses = cn({
        'form-group': true,
        'has-danger': touched && invalid
    });

    return (
        <div className={rootClasses}>
            <label>{label}</label>
            <Tag {...input} className="form-control" type={type}/>
            {
                touched &&
                ((error && <div className="text-help">{error}</div>) ||
                (warning && <div className="text-help">{warning}</div>))
            }
        </div>
    );
};

class PostNew extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        const { createPost, router } = this.props;

        createPost(data)
            .then(() => router.push('/'));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="add-post" onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Create A New Post</h3>

                <Field name="title" type="text" component={renderField} label="Title" />
                <Field name="categories" type="text" component={renderField} label="Categories" />
                <Field name="content" Tag="textarea" component={renderField} label="Content" />

                <button className="btn btn-primary" type="submit">Add</button>
                <Link to="/" className="btn btn-danger">Back</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

PostNew = withRouter(PostNew);

PostNew = reduxForm({
    form: 'PostsNewForm',
    validate
})(PostNew);

export default connect(null, { createPost })(PostNew);
