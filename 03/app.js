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
                <section >
                    <form onSubmit ={this.submitHandler}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" value ={comment} onChange = {this.changeComment} 
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
    renderCommentsList () {
        const {comments} = this.state;
        return comments.map(item => {
            return (
                <li>{item}</li> )
        })
    }

    changeComment = e => {
        this.setState({comment: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        const {comment} = this.state;
        if (comment.length > 5) {
            this.addComment(`${comment}`);
        } else {alert('Comment should contain at least 5 characters')}
    }

    addComment = (item) => {
        this.setState({comments: [...this.state.comments, item], comment: ''});
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);