import React from 'react';
import './PostCard.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

class PostCard extends React.Component {
	render() {
		return (
			<Card cards style={{ width: '16rem'}}>
			  <Card.Img variant="bottom" src={this.props.img} style={{height: '14rem'}}/>
			  <Card.Body>
			  <div className="resto-intro">
			  	<Card.Title>{this.props.name}</Card.Title>{' '}  
			  	<Badge variant="primary">tag1</Badge>{' '}
			    <Badge variant="secondary">tag2</Badge>
			   </div>
			    <Card.Text>
			      {this.props.detail}
			    </Card.Text>
			  </Card.Body>
			</Card>
		);
	}
}

export default PostCard;

