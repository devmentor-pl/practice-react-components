import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        text: 'deafult text',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        const {text} = this.state;
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
                                    value={text}
                                    onChange={ this.textChange } 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }


    textChange = e => {
        this.setState({
        text: e.target.value,
        })
    }

    renderComments() {{
        return this.state.comments.map(content => {
            return <li>{content}</li>
        })
    }}
    

    addComment = e => {
        e.preventDefault();
        const {comments, text} = this.state;
        this.setState({
            comments: [...comments, text],
            text: '',
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