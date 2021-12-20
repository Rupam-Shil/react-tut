import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const HeroSection = () => {
	const [themeMode, setThemeMode] = useContext(ThemeContext);
	const theme = useContext(ThemeContext)[0];
	const CurrentTheme = AppTheme[theme];

	return (
		<div
			style={{
				padding: '1rem',
				backgroundColor: `${CurrentTheme.backgroundColor}`,
				color: `${CurrentTheme.textColor}`,
				textAlign: 'center',
			}}
		>
			<h1>Context API theme toggler</h1>
			<p>This is a nice paragraph</p>
			<button
				onClick={() => {
					setThemeMode(themeMode === 'light' ? 'dark' : 'light');
				}}
				style={{
					backgroundColor: '#26ae60',
					padding: '1rem 10rem',
					fontSize: '1.2rem',
					color: '#fff',
					border: `${CurrentTheme.border}`,
				}}
			>
				Click me
			</button>
		</div>
	);
};

export default HeroSection;
