// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const root = createRoot(document.querySelector('#root'));

// class Article extends React.Component {
//     state = {
//         comments: [],
//     }

//     render() {
//         const {title, body} = this.props;
//         return (
//             <article>
//                 <h1>{ title }</h1>
//                 <p>{ body }</p>
//                 <section>
//                     <form>
//                         <div>
//                             <label>
//                                 <textarea
//                                     style={{ "minWidth": "300px", "minHeight": "120px" }}
//                                     name="content"
//                                 />
//                             </label>
//                         </div>
//                         <div><input type="submit" value="dodaj komentarz" /></div>
//                     </form>
//                     <ul>
//                         {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
//                     </ul>
//                 </section>
//             </article>
//         )
//     }
// }

// root.render(
//     <Article
//         title="Programowanie jest super!"
//         body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
//     />
// );

import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
  state = {
    comments: [],
    textareaValue: '',
  };

  submitHandler = (e) => {
    const {comments, textareaValue} = this.state;
    e.preventDefault();
    if (textareaValue !== '') {
      this.setState({
        comments: [...comments, textareaValue],
        textareaValue: '',
      });
    }
  };
  renderComments = () => {
    const {comments} = this.state;
    const commentList = comments.map((el, index) => {
      return <li key={index}>{el}</li>;
    });
    return commentList;
  };

  render() {
    const {title, body} = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>
                <textarea
                  style={{minWidth: '300px', minHeight: '120px'}}
                  name="content"
                  value={this.state.textareaValue}
                  onChange={(e) =>
                    this.setState({textareaValue: e.target.value})
                  }
                />
              </label>
            </div>
            <div>
              <input
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
