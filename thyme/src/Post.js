import React from 'react';
import './Post.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Post() {
	return (

		<div className="Post">
      		<header className="Post-header">
        		This is the Post header.
      		</header>

      		<Container>
	    		<Row>
				    <Col>Card 1</Col>
				    <Col>Card 2</Col>
				    <Col>Card 3</Col>
				</Row>
			</Container>
    
    	</div>

	)
}

export default Post;