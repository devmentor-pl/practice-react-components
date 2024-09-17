import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
	state = {
		comments: [],
		content: '',
	};

	render() {
		const { title, body } = this.props;
		const { content } = this.state;
		return (
			<article>
				<h1>{title}</h1>
				<p>{body}</p>
				<section>
					<form onSubmit={this.submitHandler}>
						<div>
							<label>
								<textarea
									style={{ minWidth: '300px', minHeight: '120px' }}
									name='content'
									value={content}
									onChange={this.contentChange}
								/>
							</label>
						</div>
						<div>
							<input
								type='submit'
								value='dodaj komentarz'
							/>
						</div>
					</form>
					<ul>{this.renderCommentsList()}</ul>
				</section>
			</article>
		);
	}

	renderCommentsList() {
		const { comments } = this.state;

		return comments.map((comment) => {
			return <li>{comment}</li>;
		});
	}

	contentChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	addComment(comment) {
		this.setState({
			comments: [...this.state.comments, comment],
		});
	}

	submitHandler = (e) => {
		e.preventDefault();
		const { content } = this.state;
		if (content) {
			this.addComment(content);
			this.setState({
				content: '',
			});
		} else {
			alert('Wprowadź treść komentarza!');
		}
	};
}

root.render(
	<Article
		title='Programowanie jest super!'
		body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam...'
	/>
);
