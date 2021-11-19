import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        content: '',
    };

    render() {
        const { title, body } = this.props;
        const { content } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea
                                    style={{ minWidth: '300px', minHeight: '120px' }}
                                    name="content"
                                    value={content}
                                    onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderCommentsList()}
                    </ul>
                </section>
            </article>
        );
    };

    renderCommentsList() {
        const { comments } = this.state;
        const doesCommentsExist = this.isArrayNotEmpty(comments);
        if (!doesCommentsExist) {
            return (
                <li style={{ fontStyle: 'italic' }}>No comments</li>
            );
        };
        return comments.map((comment, index) => <li key={index}>{comment}</li>);
    };

    isArrayNotEmpty(array) {
        return array.length !== 0;
    };

    changeHandler = e => {
        const { value } = e.target;
        this.setState({ content: value });
    };

    submitHandler = e => {
        e.preventDefault();
        const { content } = this.state;
        if (content.trim()) {
            this.addComment(content);
        } else {
            alert('Comment can not be empty');
        };
    };

    addComment(content) {
        this.setState({
            comments: [...this.state.comments, content],
            content: ''
        });
    };
}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);