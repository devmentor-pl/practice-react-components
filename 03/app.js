import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
  state = {
    comments: [],
    textAreaContent: "",
  };

  onChangeTextArea = (e) => {
    console.log(e.target.value);
    this.setState({ textAreaContent: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    this.setState((prev) => ({
      comments: [
        ...prev.comments,
        { id: Date.now(), comment: prev.textAreaContent },
      ],
      textAreaContent: "",
    }));
  };
  render() {
    const { title, body } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.onSubmitHandler}>
            <div>
              <label>
                <textarea
                  onChange={this.onChangeTextArea}
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={this.state.textAreaContent}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>
            {this.state.comments.map(({ id, comment }) => (
              <li key={id}>{comment}</li>
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
