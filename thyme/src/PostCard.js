import React from 'react';
import './PostCard.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

class PostCard extends React.Component {
	render() {
		return (
			<Card cards style={{ width: '18rem'}}>
			  <Card.Img variant="top" src="./holder.jpg" style={{height: '18rem'}}/>
			  <Card.Body>
			  {this.props.name}{' '}  
			  	<Badge variant="primary">Primary</Badge>{' '}
			    <Badge variant="secondary">Secondary</Badge>
			    <Card.Text>
			      {this.props.detail}
			    </Card.Text>
			  </Card.Body>
			</Card>
		);
	}
}

export default PostCard;

