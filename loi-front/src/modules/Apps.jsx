import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import SideBar from './SideBar';
// import Header from '../Partials/Header';
import routes from './Router/routes';
import {StateManager} from './store/context/ContextManager';
import Modal from './Modal';
import Loader from '../Partials/Loader';
const Header = lazy(() => import('../Partials/Header'));
const Apps = () => {
	const components = () => {
		return (
			<Switch>
				{routes.map(({path, exact, component: Component}, index) => (
					<Route key={index} path={path} exact={exact} render={(props) => <Component {...props} />} />
				))}
			</Switch>
		);
	};
	return (
		<StateManager>
			<div id="wrapper" className="rtl">
				<div id="container">
					<Suspense fallback={<Loader />}>
						<Header />
					</Suspense>
					<Modal />
					<SideBar />

					<div class="dashboard-wrapper mt-3">
						<div class="dashboard-ecommerce ">
							<div class="container-fluid dashboard-content  ">{components()}</div>
						</div>
					</div>
				</div>
			</div>
		</StateManager>
	);
};

export default Apps;

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

// NOTE switch inside,dirty code
// <Switch>
// 	<Route path="/" exact>
// 		<Products products={productItems} />
// 		<Courses courses={courseItems} />
// 	</Route>
// 	<Route path="/course/add" exact>
// 		<AddCourse item={addCourse} />
// 	</Route>
// 	<Route path="/product/add" exact>
// 		<AddProduct item={addProduct} />
// 	</Route>
// 	<Route path="/course" exact>
// 		<Courses courses={courseItems} />
// 	</Route>
// 	<Route path="/product" exact>
// 		<Products products={productItems} />
// 	</Route>
// 	<Route path="/user" exact component={User} />
// 	<Route path="/user/:id" exact component={UserProfile} />
// 	<Route component={NotFound} />
// </Switch>
