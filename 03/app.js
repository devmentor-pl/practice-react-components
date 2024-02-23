import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
    state = {
        comments: [],
        commentContent: "",
    };

    handleInputChange = (event) => {
        this.setState({
            commentContent: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.commentContent.trim() === "") {
            alert("Musisz wpisać teks aby dodać komentarz!");
            return;
        }

        this.setState((prevState) => ({
            comments: [...prevState.comments, this.state.commentContent],
            commentContent: "",
        }));
    };

    render() {
        const { title, body } = this.props;
        const { comments, commentContent } = this.state;
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
                                    value={commentContent}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="dodaj komentarz" />
                        </div>
                    </form>
                    <ul>
                        {comments.map((comment) => (
                            <li>{comment}</li>
                        ))}
                    </ul>
                </section>
            </article>
        );
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
