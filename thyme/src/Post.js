import React from 'react';
import './Post.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function Post() {
	return (

		<div className="Post">
      		<header className="Post-header">
        		This is the Post header.
      		</header>

      		<Container>
	    		<Row>
				    <Col>
				    	<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="./holder.jpg" style={{height: '18rem'}}/>
						  <Card.Body>
						  	<Badge variant="primary">Primary</Badge>{' '}
						    <Badge variant="secondary">Secondary</Badge>
						    <Card.Text>
						      Restaurant or Post Description.
						    </Card.Text>
						  </Card.Body>
						</Card>
					</Col>
				    <Col>
				    	<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="./holder.jpg" style={{height: '18rem'}}/>
						  <Card.Body>
						  	<Badge variant="primary">Primary</Badge>{' '}
						    <Badge variant="secondary">Secondary</Badge>
						    <Card.Text>
						      Restaurant or Post Description.
						    </Card.Text>
						  </Card.Body>
						</Card>
				    </Col>

				    <Col>
				    	<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="./holder.jpg" style={{height: '18rem'}}/>
						  <Card.Body>
						  	<Badge variant="primary">Primary</Badge>{' '}
						    <Badge variant="secondary">Secondary</Badge>
						    <Card.Text>
						      Restaurant or Post Description.
						    </Card.Text>
						  </Card.Body>
						</Card>
				    </Col>
				</Row>
			</Container>
    
    	</div>

	)
}

export default Post;