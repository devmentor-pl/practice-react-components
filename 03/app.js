import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        content: '',
    }

    changeHandler = e => {
        const {value} = e.target;
        this.setState({
            content: value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.addComment();
        this.setState({
            content: '',
        })
    }

    addComment() {
        this.setState({
            comments: [...this.state.comments, this.state.content],
        })
    }

    render() {
        const {title, body} = this.props;
        const {comments} = this.state;

        const commentsList = comments.map(comment => {
            return (
                <li>{comment}</li>
            )
        })
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" value={this.state.content} onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        {commentsList}
                    </ul>
                </section>
            </article>
        )
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);