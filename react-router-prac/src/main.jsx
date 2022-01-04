import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
	Outlet,
	useParams,
	NavLink,
	useNavigate,
	useLocation,
} from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home Route</h1>
		</div>
	);
};
const Courses = () => {
	const courseList = ['react', 'vue', 'angular', 'nodejs'];
	const randomCourseName =
		courseList[Math.floor(Math.random() * courseList.length)];
	return (
		<div>
			<h1>Course list</h1>
			<h4>Course card</h4>
			<p>More Test</p>
			<NavLink
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? 'pink' : 'yellow',
					};
				}}
				to={`/learn/courses/${randomCourseName}`}
			>
				{randomCourseName}
			</NavLink>
			<NavLink to={`/learn/courses/tests`} className="btn btn-light">
				tests
			</NavLink>
			<Outlet />
		</div>
	);
};
const Bundle = () => {
	return (
		<div>
			<h1>Course bundle list</h1>
			<h4>Bundle card</h4>
		</div>
	);
};

const Dashboard = () => {
	const location = useLocation();
	return (
		<div>
			<h1>info that i got here is {location.state}</h1>
		</div>
	);
};
const CourseId = () => {
	const { courseid } = useParams();
	const navigate = useNavigate();
	return (
		<div>
			<h1>Url param is : {courseid}</h1>
			<button
				onClick={() => {
					navigate('/dashboard', { state: '399' });
				}}
				className="btn btn-warning"
			>
				Price
			</button>
			<Link to="/dashboard" state={courseid}>
				Test Link
			</Link>
		</div>
	);
};
const Learn = () => {
	return (
		<div>
			<h1>Learn</h1>
			<h4>All courses are listed here</h4>
			<Link className=" btn btn-success" to="/learn/courses">
				courses
			</Link>
			|
			<Link className=" btn btn-primary" to="/learn/bundles">
				bundle
			</Link>
			<Outlet />
		</div>
	);
};

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/myapps" element={<Navigate to="/learn" />} />
			<Route path="/learn" element={<Learn />}>
				<Route path="courses" element={<Courses />}>
					<Route path=":courseid" element={<CourseId />} />
				</Route>
				<Route path="bundles" element={<Bundle />} />
			</Route>
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);
