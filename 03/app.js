import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
    }
    handleInputChange = (event) => {
        this.setState({ newComment: event.target.value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { comments, newComment } = this.state;

        if (newComment.trim()) { // dodawanie komentarza gdy nie jest pusty
            this.setState({
                comments: [...comments, newComment], // dodawanie komentarza do listy
                newComment: '' // czyszczenie pola tekstowego
            });
        }
    };

    render() {
        const { title, body } = this.props;
        const { comments, newComment } = this.state;


        return (
            <article>
            <h1>{title}</h1>
            <p>{body}</p>
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            <textarea
                                style={{ minWidth: "300px", minHeight: "120px" }}
                                name="content"
                                value={newComment} // Wartość kontrolowana przez state
                                onChange={this.handleInputChange} // Aktualizujemy state przy zmianach
                            />
                        </label>
                    </div>
                    <div><input type="submit" value="dodaj komentarz" /></div>
                </form>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li> // Renderowanie komentarzy jako elementów listy
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
