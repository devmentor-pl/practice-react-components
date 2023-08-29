import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
	state = {
		content: '',
		comments: [],
	};

	render() {
		const { title, body } = this.props;
		const { content, comments } = this.state;
		const commentsMap = comments.map(com => {
			return <li>{com}</li>;
		});
		return (
			<article>
				<h1>{title}</h1>
				<p>{body}</p>
				<section>
					<form onSubmit={this.submitHandler}>
						<div>
							<label>
								<textarea
									onChange={this.inputChange}
									value={content}
									style={{ minWidth: '300px', minHeight: '120px' }}
									name='content'
								/>
							</label>
						</div>
						<div>
							<input type='submit' value='dodaj komentarz' />
						</div>
					</form>
					<ul>{commentsMap}</ul>
				</section>
			</article>
		);
	}
	inputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	submitHandler = e => {
		e.preventDefault();
		const { content } = this.state;
		this.addComment(content);
		this.setState({
			content: '',
		});
		// czemu tutaj mam opozniony wglad w state - czyli opzinienie o jeden komentarz a metoda map widzi co jest w tablicy komentarzy?
		//tzn po pierwszym wyslaniu komentarza ten clg pokazuje ze this.state.comments jest puste
		console.log(this.state);
	};
	addComment(com) {
		this.setState({
			comments: [...this.state.comments, com],
		});
	}
}

root.render(
	<Article
		title='Programowanie jest super!'
		body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam...'
	/>
);
