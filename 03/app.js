import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
	state = {
		comment: "",
		comments: [],
	};

	changeTextArea = e => {
		const { value } = e.target;
		this.setState({
			comment: value,
		});
	};

	renderCommentsList() {
		const { comments } = this.state;
		return comments.map(comment => {
			return <li>{comment}</li>;
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
									style={{ minWidth: "300px", minHeight: "120px" }}
									name='content'
									value={comment}
									onChange={this.changeTextArea}
								/>
							</label>
						</div>
						<div>
							<input type='submit' value='dodaj komentarz' />
						</div>
					</form>
					<ul>{this.renderCommentsList()}</ul>
				</section>
			</article>
		);
	}

	submitHandler = e => {
		e.preventDefault();
		const { comment } = this.state;

		if (comment) {
			this.addComment(comment);

			this.setState({
				comment: "",
			});
		} else {
			alert("Please write your comment");
		}
	};

	addComment(comment) {
		this.setState(
			{
				comments: [...this.state.comments, comment],
			},
			() => console.log(this.state.comments)
		);
	}
}

root.render(
	<Article
		title='Programowanie jest super!'
		body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam...'
	/>
);
