import React from 'react';

const Filter = ({filtering}) => {
	return (
		<tr>
			<td colSpan="6">
				<button onClick={() => filtering('all')} type="button" className="btn btn-info m-l-10">
					همه
				</button>
				<button onClick={() => filtering('income')} type="button" className="btn btn-success m-l-10">
					درآمد
				</button>
				<button onClick={() => filtering('cost')} type="button" className="btn btn-danger m-l-10">
					هزینه
				</button>
			</td>
		</tr>
	);
};

export default Filter;
