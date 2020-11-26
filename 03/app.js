import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.addComment}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.createLiItem()}
                    </ul>
                </section>
            </article>
        )
    }

    addComment = (e) => {
        e.preventDefault()
        const content = e.target.elements.content.value;
        this.setState({ comments: [...this.state.comments, content] })
        this.clearField(e)
    }

    createLiItem() {
        const { comments } = this.state;
        return comments.map((com, index) => {
            return (
                <li key={index}>{com}</li>
            )
        })
    }

    clearField(e) {
        e.target.elements.content.value = ''
    }

}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);