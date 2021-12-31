import { useState, useEffect } from 'react';
import axios from 'axios';
import faker from 'faker';
import { Container, Col, Row } from 'reactstrap';
import { APIKEY } from '../utils/SECRET';
import CartItem from './CartItem';

const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1';

const BuyPage = ({ addInCart }) => {
	const [product, setProduct] = useState([]);
	const fetchPhotos = async () => {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: APIKEY,
			},
		});
		const { photos } = data;

		const allProduct = photos.map((photo) => ({
			smallImage: photo.src.medium,
			tinyImage: photo.src.tiny,
			productName: faker.random.word(),
			productPrice: faker.commerce.price(),
			id: faker.datatype.uuid(),
		}));
		setProduct(allProduct);
	};

	useEffect(() => {
		fetchPhotos();
	}, []);

	return (
		<Container fluid>
			<h1 className="text-success text-center">Buy Page</h1>
			<Row>
				{product.map((each) => (
					<Col md={4} key={each.id}>
						<CartItem addInCart={addInCart} product={each} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default BuyPage;
