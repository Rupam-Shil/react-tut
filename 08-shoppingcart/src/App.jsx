import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BuyPage from './components/BuyPage';

function App() {
	const [cartItem, setCartItem] = useState([]);

	const addInCart = (item) => {
		const isAlreadyAdded = cartItem.findIndex((array) => array.id === item.id);
		if (isAlreadyAdded !== -1) {
			toast('already added in cart', { type: 'error' });
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
			<BuyPage addInCart={addInCart} />
		</div>
	);
}

export default App;
