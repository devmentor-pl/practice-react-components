import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        content: '',
    }
    contentChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })

    }
    addComment(comment){
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    renderComments(){
        const {comments} = this.state;
        return comments.map(comm => {
            return (
                <li>{comm}</li>
            )
        })
    }
    submitHandler = e => {
        e.preventDefault();
        const {content} = this.state;
        if(content.length > 0){
            this.addComment(content);
            this.setState({
                content: '',
            })
        }
    }
    render() {
        const {title, body} = this.props;
        const {content} = this.state;
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
                                    name="content" value={content} onChange={this.contentChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
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
