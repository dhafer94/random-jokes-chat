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
					{contact.status ? (
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
					) : null}
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
