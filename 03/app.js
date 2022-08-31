import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
  state = {
    comments: [],
    textarea: "",
  };

  renderCommentsList() {
    const { comments } = this.state;
    return comments.map((comment) => {
      return <li>{comment}</li>;
    });
  }
  render() {
    const { title, body } = this.props;
    //
    const { textarea } = this.state;
    //
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={textarea}
                  onChange={this.inputChange}
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
    const { textarea } = this.state;
    this.addComment(textarea);
    this.setState({
      textarea: "",
    });
  };
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }
  inputChange = (e) => {
    const { tagName, value } = e.target;
    this.setState({
      [tagName.toLowerCase()]: value,
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
