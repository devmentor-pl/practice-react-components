import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: ['test', 'test2'],
    }

    formHandler = (e) => {
        e.preventDefault()
        const textarea = e.target[0]
        const {comments} = this.state
        this.setState({
            comments: [...comments, textarea.value]
        })
        textarea.value = ''
    }
    
    commentsHandler = () => {
        return this.state.comments.map( (comment, index) => {
        return <li key={index}>{comment}</li>
        })
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form
                    onSubmit={this.formHandler}
                    >
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
                        {this.commentsHandler()}
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
