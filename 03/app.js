import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        value: '',
        comments: [],
    }
    changeHandler = e => {
        const value = e.target.value 
        this.setState({ value });
    }
    submitHandle = e => {
        e.preventDefault()
        if(this.state.value) {
            this.setState({ 
                comments: [...this.state.comments, this.state.value],
                value: ''
            });
        }
    }
    render() {
        const {title, body} = this.props;
        const {comments} = this.state
        console.log(comments)
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submitHandle}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" onChange={this.changeHandler}
                                    value={this.state.value}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {
                            comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))
                        }
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