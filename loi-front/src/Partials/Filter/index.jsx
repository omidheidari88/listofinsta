import React from 'react';

const Filter = ({filtering, title}) => {
	return (
		<div class="d-flex flex-row-reverse align-items-start">
			<div class="p-2">
				<button onClick={() => filtering('cost')} type="button" className="btn btn-outline-danger m-l-10">
					{title.cost}
				</button>
			</div>
			<div class="p-2">
				<button onClick={() => filtering('income')} type="button" className="btn btn-outline-success m-l-10">
					{title.income}
				</button>
			</div>
			<div class="p-2">
				<button onClick={() => filtering('all')} type="button" className="btn btn-outline-info m-l-10">
					{title.all}
				</button>
			</div>
		</div>
	);
};

export default Filter;
