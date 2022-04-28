import React from 'react';

function Chat({ activeContact, contacts }) {
	return activeContact.length > 0
		? activeContact[0].messages.map((msg, i) => (
				<div
					key={i}
					className={
						msg.direction === 'in'
							? 'message-container-lt'
							: 'message-container-rt'
					}>
					<div key={i + 1000} className='message-inner-container'>
						{msg.direction === 'in' ? (
							<img
								key={i + 2000}
								className='contact-image'
								src={activeContact[0].img}
								alt='contact'
							/>
						) : null}
						<div key={i + 3000} className='text-and-date-containter'>
							<p
								key={i}
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
		  ))
		: null;
}

export default Chat;
