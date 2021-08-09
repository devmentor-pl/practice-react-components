import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        textarea: '',
        comments: []
    }

    submit = (e) =>{
        e.preventDefault();

        this.setState({
            textArea: e.target.value
        });

        this.addComment(e);
    }

    addComment(e) {
        const {textArea} = this.state;

        this.setState({
            comments: [...this.state.comments, textArea],
            textArea: ''
        });

    }

    showComment() {
        const {comments} = this.state;
        const commentJSX = comments.map(item => {
            return <li>{item}</li>
        });

        return commentJSX;
    }

    handleComment = (e) => {
        this.setState({
            textArea: e.target.value
        })
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>
                                <textarea onChange={this.handleComment}
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" value={this.state.textArea}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.showComment()}
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