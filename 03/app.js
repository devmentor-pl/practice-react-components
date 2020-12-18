import React from 'react';
import ReactDOM from 'react-dom';


class Article extends React.Component {
   

    /*nie wiem czy coś jest nie tak, bo  napisałeś, że mam wyczyścić textarea, ale on sam się czyści*/
   
  
    state = {
        comments: [],
        textarea: "",
    }
            handleCommentary = (event) => {
                this.setState({
                    textarea: event.target.value,
                })
                console.log(event.target.value)
            

            }

            handleSubmit = (event) => {
              
                event.preventDefault();
                const{textarea} = this.state;
                this.addCommentary(`${textarea}`) 
                this.setState({
                        textarea: "",
                })
            }

            addCommentary(comments) {
                this.setState({
                    comments: [...this.state.comments, comments]
                })
            }


            addLi()  {
              const {comments} = this.state;
              const list =  comments.map((li,id) => {
                  return <li key={id}> {li} </li>
              })

              return <>{list}</>
        
            }

    


    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content"
                                    onChange={this.handleCommentary}
                                    value ={this.state.textarea}
                               
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                       {this.addLi()}
                      
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