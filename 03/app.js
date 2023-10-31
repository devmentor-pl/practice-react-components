import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentsArr: [],
            comment: '',
        }
    }
    renderComment() {
        const { commentsArr } = this.state;

        const listItem = commentsArr.map(text => <li>{ text }</li>);

        return listItem;
    }
    textareaChange = e => {
        this.setState({comment: e.target.value})
    }
    addComment(text) {
        this.setState({ commentsArr: [...this.state.commentsArr, text]});
    }
    submitHandler = e => {
        const { comment } = this.state;
        console.log(this.state.commentsArr)
        e.preventDefault();
        this.addComment(`${comment}`);
        this.setState({ comment: ''});
    }
    render() {
        const { comment } = this.state;
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
                                    name="content" value={ comment } onChange={ this.textareaChange }
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComment()}
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
