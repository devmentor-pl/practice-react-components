import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }

    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(item => {
            return(
                <li>{item}</li>
                )
         })
    }

    changeHandler = e => { 
        const {name,value} = e.target;
        this.setState({
            [name]:value, // dynamiczne dodanie content:value do state 
        });
    }

    submmitHandler = e => {
        e.preventDefault();
        const {content}=this.state;
        if(content){
            this.addComment(content);
            this.setState({
                content:'' // czyszczenie pola 
            });
        }
        else {
            alert('Aby dodać komentarz musisz coś napisać')
        }
    }

    addComment(content){
        this.setState({
            comments: [...this.state.comments, content],//kopiujemy zawartość i dodajemy nowy element
        });
    }

    render() {
        const {title, body} = this.props;
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
                                    name="content" value={this.state.content} onChange={this.changeHandler}
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