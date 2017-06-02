import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";

class Intro extends Component {
	textSubmit = e => {
		e.preventDefault();
		let { dispatch } = this.props;
		let input = {
			name: this.refs.introName.value,
			text: this.refs.introText.value,
			createdAt: moment().unix()
		};
		dispatch(actions.addComment(input));
		// console.log(input)
		e.target.reset();
	};

	removeComment = id => e => {
		e.preventDefault();
		let { dispatch } = this.props;
		dispatch(actions.deleteComment(id));
	};

	render() {
		return (
			<div>
				<h1>Intro</h1>
				<form onSubmit={this.textSubmit}>
					<input
						type="text"
						ref="introName"
						placeholder="What is your name?"
					/>
					{" "}
					<div>
						<input
							type="text"
							ref="introText"
							placeholder="Type something"
						/>
						{" "}
					</div>
					<button className="btn btn-default btn-sm">Add Text</button>
				</form>
				<ul className="about-comments">
					{this.props.state.commentReducer.map(user => {
						let userId = user.createdAt;
						return (
							<li key={userId}>
								{`user - ${user.name}, 
								comment- ${user.text}, 
								created: ${moment.unix(user.createdAt).format("MMM Do YYYY @ h:mm a")}`}
								<span
									className="about-comments__delete"
									onClick={this.removeComment(userId)}
								>
									{" "}[x]
								</span>
							</li>
						);
					})}
				</ul>

			</div>
		);
	}
}

export default connect()(Intro);
