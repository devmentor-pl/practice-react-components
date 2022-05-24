import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        content: '',
        comments: [],
    }

    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(comment => {
            return (
                <li>
                    { comment }
                </li>
            );
        });
    }

    commentChange = e => {
        this.setState ({
            content: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {content} = this.state;
        this.addComment(`${content}`)
        console.log(this);
        this.setState ({
            content: '',
        })
    }
    
    addComment(content) {
        this.setState({
            comments: [...this.state.comments, content]
        })
    }
    
    render() {
        const {title, body} = this.props;
        const {content} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content"
                                    value={content} onChange={this.commentChange} />
                
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        { this.renderCommentsList() }
                    </ul>
                </section>
            </article>
        )
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);