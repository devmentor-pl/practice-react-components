import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            comments: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ comment: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments, this.state.comment],
        });
        this.setState((this.state.comment = ""));
    }

    render() {
        const { title, body } = this.props;
        const { comment } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <textarea
                                    style={{
                                        minWidth: "300px",
                                        minHeight: "120px",
                                    }}
                                    name="content"
                                    value={comment}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="dodaj komentarz" />
                        </div>
                    </form>
                    <ul>
                        {this.state.comments.map((com) => (
                            <li>{com}</li>
                        ))}
                    </ul>
                </section>
            </article>
        );
    }
}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector("#root")
);
