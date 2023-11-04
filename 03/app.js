import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comment: '',
        comments: [],
    }

    render() {
        const { title, body } = this.props;
        const { comment } = this.state
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea
                                    onChange={this.changeHandler}
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    value={comment}
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
        )
    }

    changeHandler = (e) => {
        this.setState({ comment: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()

        const { comment, comments } = this.state

        this.setState({comments:[...comments, comment]})
        this.setState({comment: ''})
    }

    renderCommentsList() {
        const { comments } = this.state
        return comments.map((item, index) => <li key={index}>{item}</li>)
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
