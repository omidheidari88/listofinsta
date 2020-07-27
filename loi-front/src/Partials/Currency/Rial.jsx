import React from 'react';
import Currency from '../../Utility/Currency';

function Rial({amount}) {
	const currency = new Currency();
	return (
		<div>
			<span>{currency.formatRial(amount)}</span>
		</div>
	);
}

export default Rial;
