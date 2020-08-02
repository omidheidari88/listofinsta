import React from 'react';

const Header = ({data}) => {
	const clickableItem = () => {
		console.log(data);
	};
	const rows = Object.keys(data).map((item) => {
		return 'clickable' in data[item] && data[item].clickable ? <th onClick={() => clickableItem()}>{data[item].title}</th> : <th>{data[item].title}</th>;
	});
	return <thead>{rows}</thead>;
};

export default Header;
