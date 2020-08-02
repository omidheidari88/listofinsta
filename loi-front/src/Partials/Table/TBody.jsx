import React from 'react';
import Item from '../../modules/Products/Item';
const Body = ({data}) => {
	const rows = data.map((item) => {
		// const row = Object.keys(item).map((key) => {
		// 	return <td>{item[key]}</td>;
		// });
		// return <tr>{row}</tr>;
		return <Item {...item} />;
	});
	return <tbody>{rows}</tbody>;
};

export default Body;
