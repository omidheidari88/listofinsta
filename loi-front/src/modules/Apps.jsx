import React, {useState, useEffect} from 'react';
import Products from './Products';
import Courses from './Courses';
import SideBar from './SideBar';
import AddCourse from './Courses/AddCourse';
import AddProduct from './Products/AddProduct';
import Axios from '../Ajax/Axios';
import Loader from '../Partials/Loader';
import Header from '../Partials/Header';

const Apps = () => {
	let [productItems, setProductItems] = useState([]);
	let [courseItems, setCourseItems] = useState([]);
	let [is_loading, setIs_loading] = useState(false);
	let [type, setType] = useState('all');
	// let [filter, setFilter] = useState('');
	const axios = new Axios();
	const addProduct = (item) => {
		setIs_loading(true);
		axios
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
	const componentHandler = (type) => {
		setType(type);
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

	const loading = is_loading ? <Loader /> : null;
	const components = () => {
		switch (type) {
			case 'addCourse':
				return <AddCourse item={addCourse} />;
			case 'addProduct':
				return <AddProduct item={addProduct} />;
			case 'product':
				return <Products products={productItems} />;
			case 'course':
				return <Courses courses={courseItems} />;
			case 'all':
				return (
					<React.Fragment>
						<Products products={productItems} />
						<Courses courses={courseItems} />
					</React.Fragment>
				);
			default:
				break;
		}
	};
	return (
		<div id="wrapper" className="rtl">
			<div id="container">
				<Header />
				<SideBar render={componentHandler} />
				<div class="dashboard-wrapper mt-3">
					<div class="dashboard-ecommerce ">
						<div class="container-fluid dashboard-content  ">
							{loading}
							{components()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apps;
