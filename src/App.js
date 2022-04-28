import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import SearchField from './components/searchField/SearchField.Component';
import ChatContacts from './components/chatContacts/ChatContacts.Component';
import ActiveContact from './components/activeContact/activeContact.Component';
import Chat from './components/Chat/Chat.Component';
import FacebookLogin from 'react-facebook-login';
import { staticContacts } from './staticContacts';

import './App.scss';

function App() {
	const [contacts, setContacts] = useLocalStorage('contacts', staticContacts);
	const [activeContact, setActiveContact] = useState([]);
	// const [joke, setJoke] = useState('');
	const [searchField, setSearchField] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
	const [userPicture, setUserPicture] = useLocalStorage(
		'userPicture',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==',
	);
	const [msgBox, setMsgBox] = useState('');

	const scrollToBottom = (id) => {
		var element = document.getElementById(id);

		element.scrollTop = element.scrollHeight;
	};
	const onMsgBoxChange = (e) => {
		let now = new Date();
		let dateTime = now.toISOString();
		const val = e.target.value;

		setMsgBox({
			// id: '1',
			text: val,
			dateTime: dateTime,
			direction: 'out',
		});
	};

	const onSearchChange = (e) => {
		setSearchField(e.target.value);
	};
	const filteredContacts = contacts.filter((contact) => {
		return contact.name.toLowerCase().includes(searchField.toLowerCase());
	});

	let url = 'https://api.chucknorris.io/jokes/random';
	const fetchJoke = async (url, options = {}) => {
		const { timeout = 5000 } = options;

		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), timeout);
		const response = await fetch(url, {
			...options,
			signal: controller.signal,
		});
		const data = await response.json();
		clearTimeout(id);

		return data;
	};

	const handleSend = () => {
		const oldContacts = [...contacts];
		let now = new Date();
		let dateTime = now.toISOString();
		const contact = contacts.filter((c) => c.name === activeContact[0].name);

		const msg = msgBox;

		if (
			activeContact.length > 0 &&
			msg.length !== 0 &&
			msg.text.replace(/\s/g, '') !== ''
		) {
			contact[0].messages.push(msgBox);
			const list = [
				...contact,
				...oldContacts.filter((c) => c.name !== activeContact[0].name),
			];

			setContacts([...list]);
			scrollToBottom('chats');

			fetchJoke(url).then((joke) => {
				const newJoke = {
					// id: '1',
					text: joke.value,
					dateTime: dateTime,
					direction: 'in',
				};
				contact[0].messages.push(newJoke);
				const list = [
					...contact,
					...oldContacts.filter((c) => c.name !== activeContact[0].name),
				];

				setContacts([...list]);

				setTimeout(() => {
					scrollToBottom('chats');
				}, 0);
			});
		}
	};

	const handleContactClick = (i) => {
		setActiveContact([contacts[i]]);
		setTimeout(() => {
			scrollToBottom('chats');
		}, 0);
	};
	// const responseFacebook = (response) => {
	// 	console.log(response);
	// };
	const componentClicked = () => {
		console.log('clicked');
	};
	const responseFacebook = (res) => {
		// setUserEmail(res.email);
		setUserPicture(res.picture.data.url);
		if (!isLoggedIn) {
			setIsLoggedIn(true);
		}
	};

	return (
		<div className='App'>
			<div className='left-main-container'>
				<div className='left-top-container'>
					<div className='user-container'>
						<img className='user-img' src={userPicture} alt='' />
						<div className='check-mark'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='17'
								height='17'
								viewBox='0 0 24 24'>
								<path
									fill='#749971'
									d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z'
								/>
							</svg>
						</div>
						{/* {!isLoggedIn ? ( */}
						<FacebookLogin
							size='small'
							cssClass='fb-login'
							appId='385270603504942'
							autoLoad={false}
							fields='name,picture'
							onClick={componentClicked}
							callback={responseFacebook}
						/>
						{/* : null} */}
					</div>
					<SearchField onSearchChange={onSearchChange} />
				</div>
				<div className='left-bottom-container'>
					<div className='chats-title'> chats </div>
					{/* {isLoggedIn ? ( */}
					<ChatContacts
						handleContactClick={handleContactClick}
						filteredContacts={filteredContacts}
					/>
					){/* : null} */}
				</div>
			</div>
			<div className='right-main-container'>
				<ActiveContact activeContact={activeContact} />
				<div id='chats' className='right-middle-container'>
					<Chat activeContact={activeContact} />
				</div>
				<div className='right-bottom-container'>
					<input
						onChange={onMsgBoxChange}
						className='msg-box'
						placeholder='Type your message'
						type='text'
						name=''
					/>

					<div className='send-vector'>
						<svg
							onClick={handleSend}
							width='24px'
							height='24px'
							viewBox='0 0 24 24'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							aria-labelledby='sendIconTitle'
							stroke='#a8a49d'
							strokeWidth='2'
							strokeLinecap='square'
							strokeLinejoin='miter'
							fill='none'
							color='#a8a49d'>
							<title id='sendIconTitle'>Send</title>{' '}
							<polygon points='21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394' />{' '}
						</svg>
					</div>
				</div>
			</div>
			{/* {joke} */}
		</div>
	);
}

export default App;
