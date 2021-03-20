import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        textarea: '',
        comments: [],
    }

    renderCommentsList() {
        const { comments } = this.state;

        return comments.map(comm => {
            return (
                <li>
                    { comm}
                </li>
            );
        });
    }

    changeHandler = e => {
        const { tagName, value } = e.target;
        this.setState({
            [tagName.toLowerCase()]: value,
        });
    }

    render() {
        const { title, body } = this.props;
        const { textarea } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section onSubmit={this.submitHandler}>
                    <form>
                        <div>
                            <label>
                                <textarea
                                    style={{ "min-width": "300px", "min-height": "120px", }}
                                    name="content" value={textarea} onChange={this.changeHandler}
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

    submitHandler = e => {
        e.preventDefault();

        const { textarea } = this.state;
        if (textarea) {
            this.addComment(`${textarea}`);
            this.setState({
                textarea: '',
            });
        } else {
            this.setState({
                textarea: 'Pole tekstowe nie zostało wypełnione !!!',
            });
            setTimeout(() => {
                this.setState({
                    textarea: '',
                });
            }, 2000);
        }

    }

    addComment(comm) {
        this.setState({
            comments: [...this.state.comments, comm],
        });
    }
}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);