import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }
    

    submitHandler = (e) =>{
        e.preventDefault();
        this.addComment(e);
    }

    addComment(e) {
        const {content: userComment} = e.target.elements;
    
        this.setState({
            comments: [...this.state.comments, userComment.value]
        });

        this.clearFileds(e);
    }

    clearFileds(e) {
        return e.target.reset();
    }

    showComment() {
        const {comments} = this.state;
        const commentJSX = comments.map(item => {
            return <li>{item}</li>
        });

        return commentJSX;
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandler }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="dodaj komentarz" />
                        </div>
                    </form>
                    <ul>
                        {this.showComment()}
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