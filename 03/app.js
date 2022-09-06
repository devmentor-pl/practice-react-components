import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        content: '',
        comments: [],
        
    }

    clickHandler = event => {
        console.log('click!', this);
    }

    renderCommentsList() {
        const {comments} = this.state;
        return comments.map(comment => {
            return(
                <li onClick={this.clickHandler}>{comment}</li>
            );
        });
    }

    changeHandler = e => {
        this.setState({
            content: e.target.value,
        });
    }

    render() {
        const {title, body} = this.props;
        const {content} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={content}
                                    onChange={this.changeHandler}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.renderCommentsList()}
                    </ul>
                </section>
            </article>
        )
    }


submitHandler = e => {
    e.preventDefault();
    const {content} = this.state;
    this.addComment(`${content}`);
    this.setState({
        content: '',
    })
}

addComment(comment) {
    this.setState({
        comments: [...this.state.comments, comment],
    })
}

}


ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);