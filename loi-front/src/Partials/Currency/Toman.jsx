import React from 'react';
import Currency from '../../Utility/Currency';

function Toman({amount}) {
	const currency = new Currency();
	return (
		<div>
			<span>{currency.formatToman(amount)}</span>
		</div>
	);
}

export default Toman;
