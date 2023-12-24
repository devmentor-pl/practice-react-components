import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class Article extends React.Component {
	state = {
		textarea: '',
		comments: [],
	}

	renderCommentsList() {
		const { comments } = this.state
		return comments.map(comment => {
			return <li style={{ listStyleType: 'decimal' }}>{comment}</li>
		})
	}

	changeHandler = e => {
		const { value } = e.target
		this.setState({
			textarea: value,
		})
	}

	render() {
		const { title, body } = this.props
		const { textarea } = this.state
		return (
			<article>
				<h1>{title}</h1>
				<p>{body}</p>
				<section>
					<form onSubmit={this.submitHandler}>
						<div>
							<label>
								<textarea
									value={textarea}
									onChange={this.changeHandler}
									style={{ minWidth: '300px', minHeight: '120px' }}
									name="content"
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
		)
	}

	submitHandler = e => {
		e.preventDefault()
		const { textarea } = this.state
		if (textarea) {
			this.addComment(`${textarea}`)
			this.setState({ textarea: '' })
		} else {
			alert('Proszę napisz komentarz')
		}
	}

	addComment(comment) {
		this.setState({
			comments: [...this.state.comments, comment],
		})
	}
}

root.render(
	<Article
		title="Programowanie jest super!"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
	/>
)
