import React, { Component, PropTypes } from "react";

export default class Login extends Component {
	constructor() {
		super();
		this.onSubmitLogin = this.onSubmitLogin.bind(this);
	}
	onSubmitLogin = e => {
		e.preventDefault();
		if (
			this.passInput.value.trim().length > 0 &&
			this.userInput.value.trim().length > 0 &&
			this.confirmPassword.value.trim().length > 0
		) {
			let input = {
				user: this.userInput.value,
				password: this.passInput.value,
				confirmPassword: this.confirmPassword.value
			};
			console.log(input);

			if (input.password !== input.confirmPassword) {
				this.passInput.placeholder = "пароль не совпадает";
				console.log("shiiiiit password");
			} else {
				this.passInput.placeholder = "Password";
			}
		} else {
			this.userInput.placeholder = "Введите имя";
		}

		this.userInput.value = "";
		this.passInput.value = "";
		this.confirmPassword.value = "";
	};

	render() {
		return (
			<div>
				{/*<h1>Login</h1>*/}
				<div className="wrapper">
					<form className="form-signin" onSubmit={this.onSubmitLogin}>
						<h2 className="form-signin-heading">Please login</h2>
						<input
							type="text"
							ref={input => {
								this.userInput = input;
							}}
							className="form-control"
							name="username"
							placeholder="Username"
							required
							pattern="\w+"
							title="Username must not be blank and contain only letters, numbers and underscores."
							autoFocus=""
						/>
						<input
							type="password"
							title="Password must contain at least 6 characters, including UPPER/lowercase and numbers"
							ref={input => {
								this.passInput = input;
							}}
							className="form-control"
							name="password"
							placeholder="Password"
							required
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
						/>
						<input
							type="password"
							ref={input => {
								this.confirmPassword = input;
							}}
							className="form-control"
							name="confirmpassword"
							placeholder="Confirm password"
							required
						/>
						<button
							className="btn btn-lg btn-primary btn-block"
							type="submit"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		);
	}
}

/*<form onSubmit={this.handleSubmit}>
					<input type="text" ref="introName" placeholder="What is your name?"/>
					{" "}
					<input type="text" ref="introText" placeholder="Type something"/>
					{" "}
					<button className="button expanded hollow">Add Comment</button>
				</form>
				*/
