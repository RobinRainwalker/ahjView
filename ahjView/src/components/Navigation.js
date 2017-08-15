import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Navigation extends Component {
	render() {
		return (
			<div>
			<Navbar className="navBar">
				<Nav bsStyle="default" onSelect={()=>this.props.clickHomePage()}>
					<NavItem>Home Page</NavItem>
				</Nav>
			</Navbar>
			</div>
		)
	}
}

export default Navigation;