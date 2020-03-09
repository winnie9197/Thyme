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

		//state init
		var info =  [["First Restaurant", "Restaurant or Post Description.1"],
				["Second Restaurant", "Restaurant or Post Description.2"],
				["Third Restaurant", "Restaurant or Post Description.3"],
			];
		this.state = {postInfo: info};
	}


	render() {
		const cards = this.state.postInfo.map((item) =><Col xs="4"><PostCard name={item[0]} detail={item[1]}/></Col>);
		return (
			<div className="Post">
	      		<header className="Post-header">
	        		This is the Post header.
	      		</header>

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