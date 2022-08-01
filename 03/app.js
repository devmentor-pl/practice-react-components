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
                    <form onSubmit={ this.submitComment }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content"
                                    value={ comment }
                                    onChange = { this.commentChange }
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        { this.updateCommentsList() }
                    </ul>
                </section>
            </article>
        )
    }

    commentChange = (e) => {     
        this.setState({ comment : e.target.value })
    }

    submitComment = (e) => {
        e.preventDefault();

        const {comments, comment} = this.state;
        
        if (comment.trim()) {
            const currComments = [...comments, comment];
            this.setState({ comments: currComments })
        } 
        else {
            alert('Wpisz treść komentarza');        
        }

        this.clearCommentInput();
        
    }

    updateCommentsList = () => this.state.comments.map(comment => <li>{ comment }</li>)        

    clearCommentInput = () => {
        this.setState({ comment: '' })
    }
    
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);