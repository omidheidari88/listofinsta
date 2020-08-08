import React from 'react';
const Filter = ({item}) => {
	return (
		<div class="d-flex flex-row-reverse align-items-start">
			<button onClick={() => item()} type="button" className="btn btn-sm btn-outline-info border-0 m-0  list">
				<i className="material-icons">filter_alt</i>
			</button>
		</div>
	);
};

export default Filter;
