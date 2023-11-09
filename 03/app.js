import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsArr: [],
      comment: '',
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.comment.trim() !== '') {
      this.setState((prevState) => ({
        commentsArr: [...prevState.commentsArr, this.state.comment],
        comment: '',
        error: null,
      }));
    } else {
      this.setState({ error: 'Fill the comment field' });
    }
  };

  render() {
    const { title, body } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: '300px', minHeight: '120px' }}
                  name="content"
                  value={this.state.comment}
                  onChange={this.handleCommentChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          {this.state.error && (
            <p style={{ color: 'red' }}>{this.state.error}</p>
          )}
          <ul>
            {this.state.commentsArr.map((comment, index) => (
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
