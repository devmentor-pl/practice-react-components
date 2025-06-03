import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        currentComment: '',
    }

    handleTextareaChange = (e) => {
        this.setState({ currentComment: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.currentComment) {
            this.setState(previousState => ({
                comments: [...previousState.comments, this.state.currentComment],
                currentComment: '',
            }))
        }
    }
    
    render() {
        const {title, body} = this.props;
        const { comments, currentComment } = this.state
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={currentComment}
                                    onChange={this.handleTextareaChange}
                                    placeholder='dodaj komentarz'
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {comments.map(comment => <li>{ comment }</li>)}
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
