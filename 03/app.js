import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }

    render() {
        const { title, body } = this.props;
        const commentsJsx = this.state.comments.map((comment, i) => { return <li key={i}>{comment}</li> })

        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={this.addComment}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {commentsJsx}
                    </ul>
                </section>
            </article>
        )
    }

    addComment = (event) => {
        event.preventDefault()
        const comment = event.target[0].value

        if (comment) {

            this.newComment(comment)
            event.target[0].value = ''
        }
        else {
            alert('Wpisz komentarz!')
        }


    }




    newComment(newCommentToAdd) {

        const copyComments = this.state.comments.slice()
        copyComments.push(newCommentToAdd)

        this.setState({ comments: copyComments })

    }



    deleteComment(commentToDelete) {

        const restComments = this.state.comments.filter((comment) => { return commentToDelete != comment })

        this.setState({ comments: restComments })

    }





}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);