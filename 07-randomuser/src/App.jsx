import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyCard from './MyCard';

import axios from 'axios';

const App = () => {
	const [details, setDetails] = useState({});
	const fetchDetails = async () => {
		const { data } = await axios.get('https://randomuser.me/api');
		const details = data.results[0];
		setDetails(details);
		console.log(details);
	};

	useEffect(() => {
		fetchDetails();
	}, []);
	return (
		<Container fluid className="p-4 bg-primary App">
			<Row>
				<Col md={4} className="offset-m4 mt-4">
					<MyCard details={details} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
