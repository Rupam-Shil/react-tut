import { useState, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from 'firebase/app';
//pages
import Home from './views/Home';
import Signin from './views/Signin';
import Signup from './views/Signup';
import PageNotFound from './views/404';

//Layout
import Footer from './layout/Footer';
import Header from './layout/Header';

import { UserContext } from './context/UserContext';

//init firebase
import firebaseConfig from './Config/firebaseConfig';
const app = initializeApp(firebaseConfig);

const App = () => {
	const [user, setUser] = useState(null);
	return (
		<div>
			<ToastContainer />
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</UserContext.Provider>
		</div>
	);
};

export default App;
