import React, {useState, useEffect} from 'react';
import Products from '../Products';
import Courses from '../Courses';
import Axios from '../../Ajax/Axios';
import {Redirect} from 'react-router-dom';

const Dashboard = () => {
	let [productItems, setProductItems] = useState([]);
	let [courseItems, setCourseItems] = useState([]);
	let [is_loading, setIs_loading] = useState(false);

	const axios = new Axios();
	const addProduct = (item) => {
		setIs_loading(true);
		localStorage.setItem('product', JSON.stringify(item));
		return axios
			.post('product/add', item)
			.then((res) => {
				setProductItems(res.data.item);
			})
			.catch((err) => console.log(err))
			.finally(() => setIs_loading(false));
	};
	const addCourse = (item) => {
		setIs_loading(true);
		axios
			.post('course/add', item)
			.then((res) => {
				setCourseItems(res.data.item);
			})
			.catch((err) => console.log(err))
			.finally(() => setIs_loading(false));
	};
	useEffect(() => {
		setIs_loading(true);
		axios
			.get('product/add')
			.then((res) => setProductItems(res.data.items))
			.catch((err) => console.log(err))
			.finally(() => setIs_loading(false));
	}, [courseItems.length]);
	useEffect(() => {
		setIs_loading(true);
		axios
			.get('course/add')
			.then((res) => setCourseItems(res.data.items))
			.catch((err) => console.log(err))
			.finally(() => setIs_loading(false));
	}, [productItems.length]);
	// const authCheck = !is_login ? <Redirect to="product/add" /> : ((<Products products={productItems} />), (<Courses courses={courseItems} />));
	return (
		<>
			{/* {authCheck} */}
			<Products products={productItems} />
			<Courses courses={courseItems} />
		</>
	);
};

export default Dashboard;
