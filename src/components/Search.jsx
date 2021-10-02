import React from 'react';

const Search = (props) => {
    console.log(props.value);
    return (
		<div className='col col-sm-5'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setValue(event.target.value)}
				placeholder='Search'
			></input>
		</div>
	);
};
export default Search;
