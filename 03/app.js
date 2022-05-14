import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comment: '',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        const {comment} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content" value={comment} onChange={this.commentChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.renderCommentsList()}
                    </ul>
                </section>
            </article>
        )
    }

    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(comment => <li>{comment}</li>);
    }

    addComment(value) {
        this.setState({
            comments: [...this.state.comments, value],
        });
    }

    commentChange = e => {
        this.setState({
            comment: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const {comment} = this.state;
        if(comment) {
            this.addComment(`${comment}`);
            this.setState({
                comment: '',
            });
        } else {
            alert('Wpisz komentarz!');
        }
    }

}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);