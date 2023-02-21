import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        text: '',
        comments: [],     
    }
    
    render() {
        const {title, body} = this.props;
        const {text} = this.state;
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
                                    name="content" value={text} onChange={this.inputChange}
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
    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(element => {
            return (
                <li>{element}</li>
            )
        })
    }
    submitHandler = e => {
        e.preventDefault();
        const {text} = this.state;
        if(text.length !== 0) {
            this.addComment(`${text}`);
        }   else {alert('This comment cannot be added.')}
    }
    addComment = text => {
        this.setState({comments: [...this.state.comments, text], text: ''});
    }
    inputChange = e => {
        this.setState({text: e.target.value})
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
