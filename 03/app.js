import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        newComment: '', // Dodanie stanu dla nowego komentarza
    }

    handleCommentChange = (event) => {
        // Metoda do aktualizacji stanu
        this.setState({ newComment: event.target.value });
    }

    handleSumbit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            // Dodanie nowego komentarza do listy
            comments: [...prevState.comments, prevState.newComment],
            // Wyczyszczenie pola do wpisywania
            newComment: '',
        }));
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.handleSumbit}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content"
                                    value={this.state.newComment}
                                    onChange={this.handleCommentChange} 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.state.comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}    
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
