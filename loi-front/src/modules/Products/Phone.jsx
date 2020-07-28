import React from 'react';
import Lang from '../../Utility/Lang';

function Phone({number}) {
	const phoneNumber = new Lang();
	return (
		<div>
			<span>{phoneNumber.persianNumbers(number)}</span>
		</div>
	);
}

export default Phone;
