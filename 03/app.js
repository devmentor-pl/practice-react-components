import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
        text:'',
    }
    
    changeText = e =>{
        this.setState({
            text: e.target.value
        });

       
    }
    addComment = e => {
       
        e.preventDefault();
       this.setState({
            comments: [...this.state.comments, this.state.text]
        });       
     }

    renderComments(){
        const {comments} = this.state;
        const commentsJSX = comments.map(comment =>{
            return <li>{comment}</li>
        });

        return commentsJSX;
    }


    render() {
        const {title, body} = this.props;
        const{comments} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form>
                        <div>
                            <label>
                                <textarea onChange={this.changeText}
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={this.state.text}
                                    
                                />
                            </label>
                        </div>
                        <div><input onClick={this.addComment} type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
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