import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const MyCard = ({ details }) => {
	return (
		<Card>
			<CardBody className="text-center">
				<img
					src={details.picture?.large}
					height="150"
					width="150"
					className="rounded-circle img-thumbnail border-danger"
				/>
				<CardTitle className="text-primary">
					<h1>
						<span className="pr-2">{details.name?.title}</span>
						<span className="pr-2">{details.name?.first}</span>
						<span className="pr-2">{details.name?.last}</span>
					</h1>
				</CardTitle>
			</CardBody>
		</Card>
	);
};

export default MyCard;
