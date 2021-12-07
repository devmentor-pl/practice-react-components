import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        textarea: '',
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        const {textarea} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit = {this.submitHandler}>
                        <div>
                            <label>
                                <textarea onChange = {this.changeHandler}
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value = {textarea}
                                    
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.renderComments() }
                    </ul>
                </section>
            </article>
        )
    }

    changeHandler = e => {
        this.setState({
            textarea: e.target.value,
        });
    }

    submitHandler = e => {
        e.preventDefault();

        this.addUser(this.state.textarea);
        this.setState({
            textarea: '',
        });
    } 

    addUser(content) {
        this.setState({
            comments: [...this.state.comments, content],
        });
    }

    renderComments() {
        const {comments} = this.state;
        
        return comments.map(singleComment => {
            return <li>{singleComment}</li>
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