import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        textareaContent: '',
        comments: [],
    }

    render() {
        const { title, body } = this.props;
        const { textareaContent, comments } = this.state;

        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea
                                    value={textareaContent}
                                    onChange={this.textareaChange}
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="textareaContent"
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

    textareaChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const { textareaContent } = this.state;

        if (textareaContent) {
            this.addComment(textareaContent);
            this.clearTextarea();
        } else {
            alert('Textarea is empty!');
        }
    }

    clearTextarea() {
        this.setState({
            textareaContent: '',
        });
    }

    addComment(newComment) {
        const { comments } = this.state;

        this.setState({
            comments: [...comments, newComment]
        });
    }

    renderCommentsList() {
        const { comments } = this.state;

        return comments.map(comment => {
            return (
                <li key={comment}>{comment}</li>
            )
        });
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
