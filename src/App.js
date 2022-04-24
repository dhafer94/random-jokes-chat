import React, { useState } from 'react';
import './App.scss';

function App() {
	const [joke, setJoke] = useState();

	const fetchJoke = async () => {
		const res = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await res.json();
		setJoke(data.value);
	};
	// console.log(joke);

	return (
		<div className='App'>
			<div className='left-main-container'>
				<div className='left-top-container'>
					<div className='user-container'></div>
					<div className='searchbar'></div>
				</div>
				<div className='left-bottom-container'>
					<div className='chats-title'></div>
					<div className='chats-contacts'></div>
				</div>
			</div>
			<div className='right-main-container'>
				<div className='right-top-container'></div>
				<div className='right-middle-container'></div>
				<div className='right-bottom-container'></div>
			</div>
			{/* <button onClick={fetchJoke}>Make a joke</button>
			{joke} */}
		</div>
	);
}

export default App;
