import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        message:''
    }
    
    renderCommentsList() {
        const {comments} = this.state
        return comments.map((comment, index) => {
            return (
                <li key={index}>{ comment }</li>
            )
        })
    }

    changeHandler = e => {
        this.setState({
            textarea: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {message} = this.state
        if(message) {
            this.addComment(`${message}`)
            this.setState({
                message: '',
            })
        } else {
            alert('Nie dodałeś/łaś komentarza!')
        }
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment],
        })
    }

    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={ this.submitHandler }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        { this.renderCommentsList() }
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);