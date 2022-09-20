// W pliku app.js znajdziesz komponent <Article/>, który renderuje treści przekazane przez props.

// Do każdego artykuły mogą być dodawane komentarze, które są przechowywane w state.

// Twoim zadaniem jest napisać komponent kontrolowany tj. state zarządza zawartością pola formularza.

// Następnie należy obsłużyć zdarzenie submit dla form, który ma dodać nowy komentarz jako kolejny element w this.state.comments i usunąć zawartość w <textarea/>.

// Do renderowania wielu <li/> na podstawie this.state.comments wykorzystaj .map().


import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        textarea: '',
    }

    changeHandler = (e) => {
        this.setState({
            textarea: e.target.value,
        })
        console.log(e.target.value)
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { textarea } = this.state;
        this.addComment(`${textarea}`)
        this.setState({
            textarea: '',
        })
    }

    addComment(comments) {
        this.setState({
            comments: [...this.state.comments, comments]
        })
    }

    createLiElement() {
        const { comments } = this.state;
        const liList = comments.map((li, id) => {
            return <li key={id}> {li} </li>
        })
        return <>{liList}</>

    }

    render() {
        const { title, body } = this.props;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    value={this.state.textarea}
                                    onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.createLiElement()}
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