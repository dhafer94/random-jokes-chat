import React from 'react';

function ActiveContact({ activeContact }) {
	return (
		<div className='right-top-container'>
			{activeContact.map((c, i) => (
				<img
					className='active-contact-image'
					src={c.img}
					alt='contact'
					key={i}
				/>
			))}
			<h2 className='title-contact-name'>{activeContact.map((c) => c.name)}</h2>
		</div>
	);
}

export default ActiveContact;
