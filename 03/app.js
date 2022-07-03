import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class Article extends React.Component {
    state = {
        comments: [],
        content: "",
    };

    handleChange = (e) => {
        this.setState({ content: e.target.value });
    };

    handleSubmit = () => {
        if (this.state.content) {
            this.addComments(this.state.content);
            this.setState({ content: '' });
        } else {
            alert('Add Comment to the field!');
        };
    };

    addComments = (comment) => {
        this.setState({ comments: [...this.state.comments, comment] });
    };

    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} commentValue={this.state.content} />
                    <ul>
                        {this.state.comments.map(el => <li>{el}</li>)}
                    </ul>
                </section>
            </article>
        )
    };
};

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);