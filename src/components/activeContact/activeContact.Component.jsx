import React from 'react';

function ActiveContact({ activeContact, contacts }) {
	return (
		<div className='right-top-container'>
			<img
				className='active-contact-image'
				src={activeContact.length > 0 ? activeContact[0].img : contacts[0].img}
				alt='contact'
			/>

			<h2 className='title-contact-name'>
				{activeContact.length > 0 ? activeContact[0].name : contacts[0].name}
			</h2>
		</div>
	);
}

export default ActiveContact;
