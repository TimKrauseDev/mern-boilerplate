import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';


const Detail = (props) => {
	const [book, setBook] = useState({});
	const { bookId } = useParams();

	useEffect(() => {
		API.getBook(bookId)
			.then(res => setBook(res.data))
			.catch(err => console.log(err));
	}, [bookId]);

	return (
		<Container fluid>
			<Row>
				<Col size="md-12">
					<Jumbotron>
						<h1>
							{book.title} by {book.author}
						</h1>
					</Jumbotron>
				</Col>
			</Row>

			<Row>
				<Col size="md-2">
					<Link to="/">← Back to Authors</Link>
				</Col>
			</Row>
		</Container>
	);


}
export default Detail;
