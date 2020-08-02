import React from 'react';
import THead from './THead';
import TBody from './TBody';

const index = ({tbodyData, theadData}) => {
	return (
		<table className="table table-bordered table-hover table-striped text-center">
			<THead data={theadData} />
			<TBody data={tbodyData} />
		</table>
	);
};

export default index;
