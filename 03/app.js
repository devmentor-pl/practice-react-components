import React from 'react';
import ReactDOM from 'react-dom';

import textarea from './components/styles/textarea';
import commentli from './components/styles/commentli';

class Article extends React.Component {
    state = {
        comments: [],
        textarea: ''
    }

    /* nasłuch */
    submitEl = (e) => {
        e.preventDefault();
        this.addCommentToList(e);
    }

    /* tekst komentarza */
    textComment = (e) => {
        this.setState({textArea: e.target.value})
    }

    /* komentarz dodany do listy komentarzy */
    addCommentToList = (e) => {
        const {textArea} = this.state;
        if (textArea !== '' && textArea !== undefined) {
            this.setState({
                comments: [...this.state.comments, textArea],
                textArea: '',
            });
        } else {
            alert('Wprowadź tekst komentarza!');
        }
    }

    /* komentarz dodany na stronę */
    addCommentToPage = () => {
        const {comments} = this.state;
        const commentLi = comments.map(item => {return <li style={commentli}>{item}</li>});
        return commentLi;
    }

    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitEl}>
                        <div>
                            <label>
                                <textarea onChange={this.textComment} style={textarea} 
                                    name="content" value={this.state.textArea}
                                />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="dodaj komentarz" />
                        </div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.addCommentToPage()}
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