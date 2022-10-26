import React, { useState, useEffect } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';

const Books = () => {
	const [books, setBooks] = useState([]);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		loadBooks();
	}, [])

	const loadBooks = () => {
		API.getBooks()
			.then(res => setBooks(res.data) )
			.catch(err => console.log(err));
	}

	const deleteBook = id => {
		API.deleteBook(id)
			.then(res => loadBooks())
			.catch(err => console.log(err));
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		if (title && author) {
			API.saveBook({
				title: title,
				author: author
			})
				.then(res => loadBooks())
				.catch(err => console.log(err));
		}
	};


	return (
		<Container fluid>
			<Row>
				<Col size="md-6">
					<Jumbotron>
						<h1>What Books Should I Read?</h1>
					</Jumbotron>
					<form>
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							name="title"
							placeholder="Title (required)"
						/>
						<Input
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							name="author"
							placeholder="Author (required)"
						/>

						<FormBtn
							disabled={!(author && title)}
							onClick={handleFormSubmit}
						>
							Submit Book
						</FormBtn>
					</form>
				</Col>
				<Col size="md-6 sm-12">
					<Jumbotron>
						<h1>Books On My List</h1>
					</Jumbotron>
					{books.length ? (
						<List>
							{books.map(book => (
								<ListItem key={book._id}>
									<Link to={'/books/' + book._id}>
										<strong>
											{book.title} by {book.author}
										</strong>
									</Link>
									<DeleteBtn onClick={() => deleteBook(book._id)} />
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	);
	
}

export default Books;
