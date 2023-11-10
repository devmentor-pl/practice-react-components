import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
  state = {
    comment: "",
    comments: [],
  };

  renderComments() {
    const { comments } = this.state;
    return comments.map((comment) => {
      return <li>{comment}</li>;
    });
  }

  addComment(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

  contentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { comment } = this.state;

    if (comment) {
      this.addComment(comment);
      this.setState({
        comment: "",
      });
    } else {
      alert("wpisz komentarz");
    }
  };

  render() {
    const { title, body } = this.props;
    const { comment } = this.state;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form>
            <div>
              <label>
                <textarea
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="comment"
                  value={comment}
                  onChange={this.contentChange}
                />
              </label>
            </div>
            <div>
              <input
                onClick={this.submitHandler}
                type="submit"
                value="dodaj komentarz"
              />
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
