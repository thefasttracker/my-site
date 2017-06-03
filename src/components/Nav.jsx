import React, { Component, PropTypes } from "react";
import { Link, IndexLink, RouteHandler } from "react-router";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export default class NavHeader extends Component {
	componentDidMount() {
		document.querySelector(".container").className = "container-fluid";
	}

	render() {
		return (
			<div>
				<Navbar collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Oleg Novikov</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<li>
								<Link
									to="/about"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/contacts"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									Contacts
								</Link>
							</li>
							<NavDropdown
								eventKey={3}
								title="Projects"
								id="basic-nav-dropdown"
							>
								<MenuItem
									eventKey={3.1}
									href="http://timer.thefasttracker.space"
								>
									Timer
								</MenuItem>
								<MenuItem
									eventKey={3.2}
									href="http://todo.thefasttracker.space"
								>
									Todo App
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="http://news.thefasttracker.space"
								>
									News App
								</MenuItem>
								<MenuItem divider />
								<MenuItem
									eventKey={3.4}
									href="http://cj69688.tmweb.ru/index.html"
								>
									Old Homepage
								</MenuItem>
							</NavDropdown>
							<li>
								<a
									href="https://github.com/thefasttracker"
									target="_blank"
								>
									GitHub
								</a>
							</li>
							{/*<NavItem eventKey={4} href="https://github.com/thefasttracker" target="_blank">GitHub</NavItem>*/}
						</Nav>
						<Nav pullRight>
							<li>
								<Link
									to="/login"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									Login
								</Link>
							</li>
							<li>
								<Link
									to="/signup"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									Регистрация
								</Link>
							</li>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

			</div>
		);
	}
}

/* 


				<div className="container-fluid">
			      <nav className="navbar navbar-default">
			        <div className="container-fluid">
			          <div className="navbar-header">
			            <a className="navbar-brand" href="#">Scotch Books</a>
			          </div>
			          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav">
			              <li><Link to="/">Home</Link></li>
			              <li><Link to="/about">About</Link></li>
			              <li><Link to="/books">Book</Link></li>
			              <li><Link to="/cart">Cart</Link></li>
			            </ul>
			          </div>
			        </div>
			      </nav>
			    </div>
*/
