import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        content: '',
        comments: [],
    }

    renderComments() {
        const {comments} = this.state
        return comments.map(content => {
            return (
                <li>{content}</li>
            )
        })
    }
    
    render() {
        const {title, body} = this.props;
        const {content} = this.state
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section onSubmit={this.submitHandler}>
                    <form>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content" value={content} onChange={this.inputChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                       {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }

    inputChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = e => {
        e.preventDefault();

        const {content} = this.state
        if(content) {
            this.addComment(`${content}`)
            this.setState({content: ''})
        } else {
            console.log('Wpisz komentarz')
        }
    }
    
    addComment(content) {
        this.setState({
            comments: [...this.state.comments, content],
        })
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);