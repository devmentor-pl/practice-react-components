import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [
            {
                text: 'some comment 1',
                id: 1
            }, 
            {
                text: 'some comment 2',
                id: 2
            }, 
        ],
        commentInput: ''
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            comments: this.addComment(),
            commentInput: ''
        })
    }
    addComment = () => {
        return this.state.comments.concat({
            text: this.state.commentInput,
            id: this.getId()
        })
    }
    getId = () => this.state.comments.reduce((acc, comment) => acc = acc > comment.id ? acc : comment.id) + 1;

    handleChange = (event) => {
        event.preventDefault();
        const commentText = event.target.value;
        this.setState({ commentInput: commentText })
    }

    render() {
        const {title, body} = this.props;
        const { text, id } = this.state.comments;

        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={ this.state.commentInput }
                                    onChange={ this.handleChange }
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.state.comments.map(comment => {
                            return <li key={comment.id}>{comment.text}</li>
                        })}
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