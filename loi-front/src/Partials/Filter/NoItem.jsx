import React from 'react';

const NoItem = ({col}) => {
	return (
		<tr>
			<td colSpan={col}>
				<span>موردی یافت نشد</span>
			</td>
		</tr>
	);
};

export default NoItem;
