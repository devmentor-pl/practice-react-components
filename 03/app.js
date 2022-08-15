import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        content: 'Empty comment',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        const {content} = this.state
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandler} >
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" value={content} onChange={this.textareaChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }

    renderComments(){
        const {comments} = this.state
        const commentsJSX = comments.map((comment,index) => <li key={index}>{comment}</li>)
        return commentsJSX
    }

    textareaChange = (e) => {
        const {value,name} = e.target
        this.setState({[name]: value})
    }

    addComment = (comment) => {
        const {comments} = this.state
        this.setState({comments: [...comments,comment]})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const {content} = this.state
        this.addComment(content)
        this.setState({content: ''})
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);