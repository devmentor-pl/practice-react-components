import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
  state = {
    comments: [],
    comment: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { comment } = this.state;
    if (!comment) return;

    this.addComment(comment);
    this.setState({
      comment: "",
    });
  };

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

  renderComments() {
    return this.state.comments.map((comment, i) => <li key={i}>{comment}</li>);
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
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={comment}
                  onChange={(e) => this.setState({ comment: e.target.value })}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>{this.renderComments()}</ul>
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
