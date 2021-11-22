import React from 'react';
// import '../style.css';

const Button = ({ title = 'dummy' }) => {
	return <button className="button">{title}</button>;
};

export default Button;
