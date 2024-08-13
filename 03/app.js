import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        textarea: '',
        comments: ['lorem', 'ipsum'],
    }

    render() {
        const { title, body } = this.props;
        const { textarea } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.clickHandler} >
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    value={textarea}
                                    onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>

                        {this.renderCommentsList()}
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                    </ul>
                </section>
            </article>
        )
    }

    renderCommentsList() {

        const { comments } = this.state
        const commentsList = comments.map(el => { return <li>{el}</li> })
        return commentsList
    }
    changeHandler = e => {

        this.setState({
            textarea: e.target.value,

        });
    }

    clickHandler = e => {
        e.preventDefault();
        const { textarea } = this.state
        this.addComment(`${textarea}`)
        this.setState({ textarea: '' })

    }

    addComment(comment) {

        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
}
root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
