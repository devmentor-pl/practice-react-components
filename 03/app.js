import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        text: '',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={ this.submitChange }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    onChange={ this.inputChange }
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        {this.state.comments.map( comment => <li>{comment}</li> )}
                    </ul>
                </section>
            </article>
        )
    }

    inputChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    submitChange = (e) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments, this.state.text]
        }, () => this.clearTextArea(e));
    }

    clearTextArea(e) {
        e.target.content.value = '';
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
