import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

function App() {
	const [cartItem, setCartItem] = useState([]);

	const addInCart = (item) => {
		const isAlreadyAdded = cartItem.findIndex((array) => array.id === item.id);
		if (isAlreadyAdded !== -1) {
			toast('already added in cart', { type: 'error' });
			return;
		}

		setCartItem([...cartItem, item]);
	};

	const buyNow = () => {
		setCartItem([]);
		toast('Purchase complete', { type: 'success' });
	};

	const removeItem = (item) => {
		setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
	};

	return (
		<div className="App">
			<Container fluid>
				<ToastContainer />
				<Row>
					<Col md="8">
						<BuyPage addInCart={addInCart}></BuyPage>
					</Col>
					<Col md="4">
						<Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
