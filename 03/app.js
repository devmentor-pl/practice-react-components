import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        content: ''
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit= { this.submitHandler }>
                        <div>
                            <label>
                                <textarea value={ this.state.content } onChange={ this.contentChangedHandler }
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        { this.renderComments() }
                    </ul>
                </section>
            </article>
        )
    }

    submitHandler = e => {
        e.preventDefault()
        const newComment = this.state.content

        if(newComment) {
            const newComments = [...this.state.comments, newComment]

            this.setState({ comments: newComments,
                            content: ''
             })
        }
    }

    contentChangedHandler = e => this.setState({content: e.target.value})

    renderComments() {
        const comments = this.state.comments

        return comments.map(comment => {
            return <li>{ comment }</li>
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