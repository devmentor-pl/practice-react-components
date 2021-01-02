import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
  state = {
    comments: [],
    textAreaValue: '',
  };

  submitForm = (e) => {
    e.preventDefault();

    const commentsCopy = [...this.state.comments];
    if (this.state.textAreaValue) commentsCopy.push(this.state.textAreaValue);

    this.setState({ comments: commentsCopy, textAreaValue: '' });
  };

  commentEdit = (e) => {
    const { value: textPassed } = e.target;
    this.setState({ textAreaValue: textPassed });
  };

  render() {
    const { title, body } = this.props;

    const renderComments = this.state.comments.map((comment) => {
      return <li>{comment}</li>;
    });

    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.submitForm}>
            <div>
              <label>
                <textarea
                  style={{ 'min-width': '300px', 'min-height': '120px' }}
                  name='content'
                  onChange={this.commentEdit}
                  value={this.state.textAreaValue}
                />
              </label>
            </div>
            <div>
              <input type='submit' value='dodaj komentarz' />
            </div>
          </form>

          <ul>
            {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
            {renderComments}
          </ul>
        </section>
      </article>
    );
  }
}

ReactDOM.render(
  <Article
    title='Programowanie jest super!'
    body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam...'
  />,
  document.querySelector('#root')
);
