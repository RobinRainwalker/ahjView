import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class Ahjs extends Component {

	renderList() {
		return this.props.ahjs.map((ahj, index) => {
			return(
				<ListGroup>
				<li key={index}>
					<div 
					onClick={(e)=>{this.props.clickAhjHandler(e, ahj.id)}}
					>
					<ListGroupItem 
						className="listItem"
						header={ahj.Name}>
							{ahj.State__c}
					</ListGroupItem>
					</div>
				</li>
				</ListGroup>
			)
		})
	}
	render() {
		return (
			<ul>
			{this.renderList()}
			</ul>
		)
	}
}

export default Ahjs;