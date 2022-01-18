import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
  state = {
    comments: [],
    comment: "",
  };

  renderCommentsList() {
    const { comments } = this.state;

    return comments.map((commentContent) => {
      return <li>{commentContent}</li>;
    });
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

  render() {
    const { title, body } = this.props;

    const { comment } = this.state;

    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>
                <textarea
                  name="textContent"
                  value={comment}
                  onChange={this.commentChange}
                  style={{ "min-width": "300px", "min-height": "120px" }}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>{this.renderCommentsList()}</ul>
        </section>
      </article>
    );
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { comment } = this.state;
    if (comment) {
      console.log(`${comment}`);
      this.addComment(`${comment}`);
      this.setState({
        comment: "",
      });
    } else {
      alert("Pole tekstowe nie moze pozostać puste!");
    }
  };

  commentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
}

ReactDOM.render(
  <Article
    title="Programowanie jest super!"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
  />,
  document.querySelector("#root")
);
