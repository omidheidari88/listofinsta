import React from 'react';

const Filter = ({items}) => {
	const itemsRender = items.map((item) => {
		return (
			<button onClick={() => item.whenClick()} type="button" className="btn btn-sm btn-outline-info border-0 m-0  list">
				{item.tittle}
			</button>
		);
	});
	return (
		<div class="d-flex flex-row-reverse align-items-start">
			<div class="p-0 rounded-right list">{itemsRender}</div>
		</div>
	);
};

export default Filter;
