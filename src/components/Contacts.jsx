import React, { Component, PropTypes } from "react";

export default class Contacts extends Component {
	render() {
		return (
			<div>
				<h1>Contacts</h1>
				<p>
					email:
					{" "}
					<a
						className="contacts"
						href="mailto:thefasttracker@gmail.com"
					>
						thefasttracker@gmail.com
					</a>
					{" "}
				</p>
				<p>
					github:
					{" "}
					<a
						className="contacts"
						href="https://github.com/thefasttracker"
					>
						github.com/thefasttracker
					</a>
				</p>
			</div>
		);
	}
}
