import React from 'react';

function ChatContacts({ filteredContacts, handleContactClick }) {
	return (
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
						<div>
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
						</div>
						{/* <div key={i + 200000} className='break'></div> */}

						<p key={i + 2000} className='contact-latest-msg'>
							{contact.messages[contact.messages.length - 1].text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default ChatContacts;
