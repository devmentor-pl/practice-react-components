import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
	state = {
		comments: [],
        text: ''
	};

	renderComments() {
		return this.state.comments.map((content, index) => {
			return <li key={index}>{content}</li>;
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const { comments, text } = this.state;
		this.setState({
			comments: [...comments, text],
			text: "",
		});
	};

	handleChange = (event) => {
		this.setState({
			text: event.target.value,
		});
	};
	render() {
		const { title, body } = this.props;
		return (
			<article>
				<h1>{title}</h1>
				<p>{body}</p>
				<section>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								<textarea style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    value={this.state.text}
                                    onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<input type='submit' value='dodaj komentarz' />
						</div>
					</form>
					<ul>{/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                    {this.renderComments()}
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
	document.querySelector("#root")
);
