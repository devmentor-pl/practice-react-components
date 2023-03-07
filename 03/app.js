import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ["jwkdbv", "kjsbc"],
            textarea: '',
        }
    }
    renderCommentsList() {
        const { comments } = this.state;
        return comments.map(text => {
            return (
                <li onClick={this.clickHandler}>{text}</li>
            );
        });
    }
    render() {
        const { title, body } = this.props;
        const { textarea } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitHandler}>
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
                    </ul>
                </section>
            </article>
        )
    }
    changeHandler = e => {
        const { tagName, value } = e.target;
        this.setState({
            [tagName.toLowerCase()]: value,
        });
    };
    submitHandler = e => {
        e.preventDefault();
        const { textarea } = this.state;
        this.addComments(textarea);
        this.setState({
            textarea: '',
        });
    }
    addComments(text) {
        this.setState({
            comments: [...this.state.comments, text]
        });
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
