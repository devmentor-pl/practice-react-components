import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        text:'',
    }

    addComments () {
        return this.state.comments.map (comm =>{
            return <li>{comm}</li>
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            comments: {...this.state.comments, text},
            text:'',
        })
    }
    
    handleDiferent = event => {
        this.setState ({
            text:event.target.value,
        })
    }

    
    render() {
        console.log(this.state);
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>
                            <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={this.state.text}
                                    onChange={this.handleDiferent}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {this.addComments()}
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
