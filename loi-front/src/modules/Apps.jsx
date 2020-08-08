import React, {useState, useEffect, useReducer} from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './Products';
import Courses from './Courses';
import SideBar from './SideBar';
import AddCourse from './Courses/AddCourse';
import AddProduct from './Products/AddProduct';
import Axios from '../Ajax/Axios';
import Loader from '../Partials/Loader';
import Header from '../Partials/Header';
import routes from './Router/routes';
import User from './User/Users';
import UserProfile from './User/UserProfile';
import NotFound from '../Partials/NotFound';
import {StateManager} from './store/ContextManager';

const Apps = () => {
	let [productItems, setProductItems] = useState([]);
	let [courseItems, setCourseItems] = useState([]);
	let [is_loading, setIs_loading] = useState(false);
	let [type, setType] = useState('all');
	const axios = new Axios();
	const addProduct = (item) => {
		setIs_loading(true);

		localStorage.setItem('product', JSON.stringify(item));
		// state.items.map((item) => {
		return axios
			.post('product/add', item)
			.then((res) => {
				setProductItems(res.data.item);
			})
			.catch((err) => console.log(err))
			.finally(() => setIs_loading(false));
		// });
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

	// NOTE without react router
	// const components = () => {
	// 	switch (type) {
	// 		case 'addCourse':
	// 			return <AddCourse item={addCourse}  />;
	// 		case 'addProduct':
	// 			return <AddProduct item={addProduct} />;
	// 		case 'product':
	// 			return <Products products={productItems} />;
	// 		case 'course':
	// 			return <Courses courses={courseItems} />;
	// 		case 'all':
	// 			return (
	// 				<React.Fragment>
	// 					<Products products={productItems} />
	// 					<Courses courses={courseItems} />
	// 				</React.Fragment>
	// 			);
	// 		default:
	// 			break;
	// 	}
	// };

	// NOTE with react router--//
	const components = () => {
		return (
			// NOTE switch inside,dirty code
			<Switch>
				<Route path="/" exact>
					<Products products={productItems} />
					<Courses courses={courseItems} />
				</Route>
				<Route path="/course/add" exact>
					<AddCourse item={addCourse} />
				</Route>
				<Route path="/product/add" exact>
					<AddProduct item={addProduct} />
				</Route>
				<Route path="/course" exact>
					<Courses courses={courseItems} />
				</Route>
				<Route path="/product" exact>
					<Products products={productItems} />
				</Route>
				<Route path="/user" exact component={User} />
				<Route path="/user/:id" exact component={UserProfile} />
				<Route component={NotFound} />
			</Switch>

			// NOTE switch outside,clean code,but i don't know how to handle the props so it's not working right now
			// <Switch>
			// 	{routes.map((route, index) => (
			// 		<Route key={index} {...route} />
			// 	))}
			// </Switch>
		);
	};
	return (
		<StateManager>
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
		</StateManager>
	);
};

export default Apps;
