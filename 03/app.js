import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
  state = {
    comments: [],
    commentContent: "",
  };

  handleCommentContentChange(e) {
    this.setState({
      commentContent: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { commentContent } = this.state;
    this.addNewComment(commentContent);
    this.setState({
      commentContent: "",
    });
  }

  addNewComment(content) {
    this.setState({
      comments: [...this.state.comments, content],
    });
  }

  handleRemoveButtonClick(comment) {
    const comments = this.state.comments.filter((item) => item !== comment);

    this.setState({ comments });
  }

  render() {
    const { title, body } = this.props;
    const { comments, commentContent } = this.state;

    const commentsList = comments.map((comment, index) => {
      return (
        <li key={index}>
          {comment}{" "}
          <button onClick={() => this.handleRemoveButtonClick(comment)}>
            Usuń
          </button>
        </li>
      );
    });

    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={commentContent}
                  onChange={(e) => this.handleCommentContentChange(e)}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>
            {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
            {commentsList}
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
