import React from 'react';
import './Post.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostCard from './PostCard';
import CardDeck from 'react-bootstrap/CardDeck';
// import Badge from 'react-bootstrap/Badge';


class Post extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const cards = this.props.postInfo.map((item) =><Col xs="4"><PostCard name={item[0]} detail={item[1]} img={item[2]}/></Col>);
		return (
			<div className="Post">

	      		<Container>
					    <Row>
						   	{cards}
						</Row>				
				</Container>
	    
	    	</div>
		);
	}
}

export default Post;