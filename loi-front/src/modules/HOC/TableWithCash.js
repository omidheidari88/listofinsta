import React, {useState, useEffect} from 'react';

const TableWithCash = (Component, props, localStorageKey) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getDataFromLoacalStorage = localStorage.getItem(localStorageKey);
		const product = JSON.parse(getDataFromLoacalStorage);
		setItems({id: product.price, name: product.category, avatar: '/#'});
	}, [items.length]);

	const cashTable = () => {
		return <Component data={items} metaData={props} />;
	};

	return cashTable;
};
export default TableWithCash;
