import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        content: 'Your comment here'
    }

    render() {
        const { title, body } = this.props;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    onChange={this.handleInputChange}
                                    value={this.state.content}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.comments)
    }

    addComment = (comment) => {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { content } = this.state;

        if (content !== 'Your comment here' || content !== "") {
            this.addComment(content);
            this.setState({
                content: 'Your comment here'
            })
        } else {
            alert('Wprowadź zawartość komentarza')
        }
    }

    renderComments = () => {
        const { comments } = this.state;

        return comments.map((el) => {
            return (
                <li>{el}</li>
            )
        })
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
