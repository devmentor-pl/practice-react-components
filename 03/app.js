import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {

    state = {
        comments: [],
        text: '',
    }

    render() {

        const {title, body} = this.props;
        const { text }= this.state;

        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit = { this.submitHandler } >
                        <div>
                            <label>
                                <textarea
                                    onChange = { this.getComment }
                                    style={{ minWidth: "300px", minHeight: "120px" }}
                                    name="content"
                                    value = { text }
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
    };

    renderCommentsList = () => {
        const { comments } = this.state;

        return (
            comments.map( comment => {
                if( comment.length !== 0 ) {
                    return <li>{comment}</li>
                }
            })
        )
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { text } = this.state;

        if(text.length !== 0 ) {
            this.addComment( text )
        }
    };

    addComment = (text) => {
        this.setState( {
            comments: [...this.state.comments , text ],
            text: '',
        })
    };

    getComment = (e) => {
        this.setState( {
            text: e.target.value
        })
    };
}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);