import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createList = this.createList.bind(this);
        this.state = {
            comments: ["komentarz"],
            textValue: ""
        }
    }
    handleSubmit(event) {

        event.preventDefault();

        if (this.state.textValue !== "") {
            this.state.comments.push(this.state.textValue);
            console.log(this.state.comments)
            this.setState({textValue:""});
        }

    }
    handleChange(event) {

        this.setState({textValue: event.currentTarget.value});

        
    }
    createList() {
        const {comments} = this.state;

        return comments.map((com) => {
             return (
                 <li>{com}</li>
             )
         })
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
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content"
                                    onChange={this.handleChange} 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.createList()}
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