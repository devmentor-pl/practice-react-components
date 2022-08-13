import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        textarea: '',
    }

    renderCommentsList() {
        const {comments} = this.state
        return comments.map(comment => {
            return (
                <li>{ comment }</li>
            )
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
                                    value={ this.state.textarea }
                                    onChange={ this.changeHandler }
                                />
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

    changeHandler = e => {
        this.setState({
            textarea: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {textarea} = this.state
        if(textarea) {
            this.addComment(`${textarea}`)
            this.setState({
                textarea: '',
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
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);