import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comment: '',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        const { comment } = this.state
        const commentsList = this.state.comments.map((userComment) => {
            return <li>{userComment}</li>
        })
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
                                    value={comment}
                                    onChange={ this.inputChange } 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {commentsList}
                    </ul>
                </section>
            </article>
        )
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment],
            comment: '',
        })
    }

    inputChange = e => {
        const {value} = e.target
        this.setState({
            comment: value,
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {comment} = this.state

        if(comment) {
            this.addComment(comment)
        }
    }

}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
