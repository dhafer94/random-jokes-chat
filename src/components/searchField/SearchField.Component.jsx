import React from 'react';

function SearchField({ onSearchChange }) {
	return (
		<input
			onChange={onSearchChange}
			type='text'
			className='searchbar'
			placeholder='search or start a new '
		/>
	);
}

export default SearchField;
