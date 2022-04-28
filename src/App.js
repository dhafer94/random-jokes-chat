import React, { useState } from 'react';
import './App.scss';

function App() {
	const [joke, setJoke] = useState('');
	const [activeContact, setActiveContact] = useState([]);
	const [searchField, setSearchField] = useState('');



	const contacts = [
		{
			name: 'Joseph',
			status: true,
			img: 'https://placekitten.com/100/100',
			messages: [
				{
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},
				{
					text: 'Fine, you?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'out',
				}, {
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},
				{
					text: 'Fine, you?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'out',
				}, {
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},

				// {
				// 	text: 'Fine, you?',
				// 	date: '4/25/2022',
				// 	time: '10:31:00 AM',
				// 	direction: 'in',
				// },
			],
		}, {
			name: 'Alexander',
			status: true,
			img: 'https://placekitten.com/200/100',
			messages: [
				{
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},
				{
					text: 'Fine, you?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'out',
				}, {
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},
				{
					text: 'Fine, you?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'out',
				}, {
					text: 'Hi, how are you ?',
					dateTime: '2022-04-27T09:24:09.636Z',
					direction: 'in',
				},

				// {
				// 	text: 'Fine, you?',
				// 	date: '4/25/2022',
				// 	time: '10:31:00 AM',
				// 	direction: 'in',
				// },
			],
		},
	];

	const onSearchChange = (evt) => {
		setSearchField(evt.target.value);
	};
	const filteredContacts = contacts.filter((robots) => {
		return robots.name.toLowerCase().includes(searchField.toLowerCase());
	});

	// console.log(filteredContacts);

	const fetchJoke = async () => {
		const res = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await res.json();

		let now = new Date();
		let dateTime = now.toISOString();

		setJoke({
			// id: '1',
			text: data.value,
			dateTime: dateTime,
			direction: 'in',
		});
	};

	const handleContactClick = (i) => {
		setActiveContact(contacts[i]);
	};

	return (
		<div className='App'>
			<div className='left-main-container'>
				<div className='left-top-container'>
					<div className='user-container'>
						<img className='user-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==' alt='' />
					</div>
					<input
						onChange={onSearchChange}
						type='text'
						className='searchbar'
						placeholder='search or start a new '
					/>
				</div>
				<div className='left-bottom-container'>
					<div className='chats-title'> chats </div>
					<div className='chats-contacts'>
						{filteredContacts.map((contact, i) => (
							<div
								onClick={() => handleContactClick(i)}
								className='contact-container'
								key={i}>
								<img
									key={i + 10000}
									className='contact-image'
									src={contact.img}
									alt='contact'
								/>
								<div key={i} className='contact-right-container'>
									<p className='contact-name' key={i}>
										{contact.name}
									</p>
									<p className='contact-last-msg-date' key={i + 1000}>
										{new Date(
											contact.messages[contact.messages.length - 1].dateTime,
										).toLocaleDateString('en-US', {
											day: '2-digit',
											month: 'short',
											year: 'numeric',
										})}
									</p>
									<div key={i + 200000} className='break'></div>

									<p key={i + 2000} className='contact-latest-msg'>
										{contact.messages[contact.messages.length - 1].text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='right-main-container'>
				<div className='right-top-container'>
					<img
						className='active-contact-image'
						src={
							activeContact.length > 0
								? activeContact.img
								: contacts[contacts.length - 1].img
						}
						alt='contact'
					/>

					<h2 className='title-contact-name'>
						{activeContact.length > 0
							? activeContact.name
							: contacts[contacts.length - 1].name}
					</h2>
				</div>
				<div className='right-middle-container'>
					{activeContact.length > 0
						? activeContact.messages.map((msg, i) => (
							<div
								key={i}
								className={
									msg.direction === 'in'
										? 'message-container-lt'
										: 'message-container-rt'
								}>
								<div key={i} className='message-inner-container'>
									{msg.direction === 'in' ? (
										<img
											key={i}
											className='contact-image'
											src={activeContact.img}
											alt='contact'
										/>
									) : null}
									<div key={i} className='text-and-date-containter'>
										<p
											key={i}
											className={
												msg.direction === 'in'
													? 'contact-msg-text-dark'
													: 'contact-msg-text-light'
											}>
											{msg.text}
										</p>
										<p key={i} className='contact-msg-date-time'>
											{new Date(msg.dateTime).toLocaleDateString('en-US', {
												dateStyle: 'short',
											})}{' '}
											,{' '}
											{new Date(msg.dateTime).toLocaleTimeString('en-US', {
												hour12: 'true',
												hour: 'numeric',
												minute: '2-digit',
											})}
										</p>
									</div>
								</div>
							</div>
						))
						: contacts[contacts.length - 1].messages.map((msg, i) => (
							<div
								key={i}
								className={
									msg.direction === 'in'
										? 'message-container-lt'
										: 'message-container-rt'
								}>
								<div key={i} className='message-inner-container'>
									{msg.direction === 'in' ? (
										<img
											key={i}
											className='contact-image'
											src={contacts[contacts.length - 1].img}
											alt='contact'
										/>
									) : null}
									<div key={i + 5000} className='text-and-date-containter'>
										<p
											key={i + 4000}
											className={
												msg.direction === 'in'
													? 'contact-msg-text-dark'
													: 'contact-msg-text-light'
											}>
											{msg.text}
										</p>
										<p key={i + 1000} className='contact-msg-date-time'>
											{new Date(msg.dateTime).toLocaleDateString('en-US', {
												dateStyle: 'short',
											})}{' '}
											,{' '}
											{new Date(msg.dateTime).toLocaleTimeString('en-US', {
												hour12: 'true',
												hour: 'numeric',
												minute: '2-digit',
											})}
										</p>
									</div>
								</div>
							</div>
						))}
				</div>
				<div className='right-bottom-container'>
					<input
						className='msg-box'
						placeholder='Type your message'
						type='text'
						name=''
					/>
				</div>
			</div>
			{/* <button onClick={fetchJoke}>Make a joke</button> */}
			{/* {joke} */}
		</div>
	);
}

export default App;
