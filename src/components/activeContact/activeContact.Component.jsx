import React from 'react';

function ActiveContact({ activeContact }) {
	return (
		<div className='right-top-container'>
			{activeContact.map((c, i) => (
				<img
					key={i}
					className='active-contact-image'
					src={c.img}
					alt='contact'
				/>
			))}
			<h2 className='title-contact-name'>{activeContact.map((c) => c.name)}</h2>
		</div>
	);
}

export default ActiveContact;
