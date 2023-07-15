import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        content: '',
        comments: ['aa', 'bb'],
    }

    addComment = e => {
        e.preventDefault()

        const { content, comments } = this.state
        this.setState({
            comments: [...comments, content],
            content: '',
        })
    }

    inputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    showComments() {
        const { comments } = this.state
        return (comments.map((comment, key) => {
            return <li key={key}>{comment}</li>
        })
        )
    }

    render() {
        const { title, body } = this.props;
        const { content } = this.state
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form
                        onSubmit={this.addComment}
                    >
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name={'content'}
                                    value={content}
                                    onChange={this.inputChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {
                            this.showComments()
                        }
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
