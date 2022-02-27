import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }

    // z tym zadaniem mam problem, po wpisywaniu komentarza, od razu renderuje mi to co wpisuje na ekran
    // w f-cji changeHandler pobieram wpisana zawartosc i aktualizuje setState i mam render
    // nie wiem jak to zrobic aby dopiero po kliknicu w button pokazywalo komentarze

    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(item => {
            return(
                <li>{item}</li>
                )
         })
    }

    changeHandler = e => { // aktualizuje wartosc w state.comments
        this.setState({comments:[e.target.value]}) //pewnie tutaj cos robie zle ale nie wiem co
    }

    submmitHandler = e => {
        e.preventDefault();
    }

    render() {
        const {title, body} = this.props;
        const {comments} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submmitHandler}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "min-width": "300px", "min-height": "120px" }}
                                    name="content" value={comments} onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderCommentsList()}
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