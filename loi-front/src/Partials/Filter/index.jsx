import React from 'react';

const Filter = ({filtering, title}) => {
	return (
		<div class="d-flex flex-row-reverse align-items-start">
			<div class="p-0 rounded-right">
				<button onClick={() => filtering('all')} type="button" className="btn btn-sm btn-outline-info border-0 m-0">
					{title.all}
				</button>
				<button onClick={() => filtering('cost')} type="button" className="btn btn-sm btn-outline-info border-0 m-0">
					{title.cost}
				</button>
				<button onClick={() => filtering('income')} type="button" className="btn btn-sm btn-outline-info border-0 m-0">
					{title.income}
				</button>
			</div>
		</div>
	);
};

export default Filter;
