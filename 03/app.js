import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        comment: ''
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit = {this.submitHandler}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={this.state.comment}
                                    onChange = {this.commentChange}
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
    commentChange = e =>{
        this.setState({
            comment: e.target.value
        })
    }
    addComment(comment){
        const copyComments = this.state.comments.slice()
        copyComments.push(comment)

        this.setState({
            comments: copyComments
        })
    }

    submitHandler = e =>{
        e.preventDefault()
        const {comment} = this.state

        this.addComment(comment)

        this.setState({
            comment: ''
        })
        
    }
  
    renderCommentsList(){
        const {comments} = this.state
        const commentsList = comments.map(comment => {
            return <li>{comment}</li>
        })
        return commentsList
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);