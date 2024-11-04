import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
  state = {
    comments: [],
    newComment: "",
  };

  handleChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newComment.trim()) {
      this.setState((prevState) => ({
        comments: [...prevState.comments, prevState.newComment],
        newComment: "",
      }));
    }
  };

  render() {
    const { title, body } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={this.state.newComment}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>
            {this.state.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
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
