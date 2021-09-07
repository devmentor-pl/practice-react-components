import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            comment: '',
        }
    }

    typeComment = e => {
        const { value } = e.target;

        this.setState({
            comment: value,
        })
    }

    addNewComment = e => {
        e.preventDefault();
        const { comments, comment } = this.state;

        this.setState({
            comments: [...comments, comment],
        })

        return (
            this.newListElement()
        )
    }

    newListElement = e => {
        return (
                this.state.comments.map(comment => {
                    return (
                        <li>
                            { comment }
                        </li>
                    )
                })
        )
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={ this.addNewComment }>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content"
                                    onChange={ this.typeComment }
                                    value={ this.state.comment }
                                />
                            </label>
                        </div>
                        <div><input 
                                type="submit" 
                                value="dodaj komentarz"/></div>
                    </form>
                    <ul>
                        { this.newListElement() }
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
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