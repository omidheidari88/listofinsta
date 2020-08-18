import React, {lazy, Suspense, useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import SideBar from './SideBar';
import {connect} from 'react-redux';
// import Header from '../Partials/Header';
import routes from './Router/routes';
import {StateManager} from './store/context/ContextManager';
import Modal from './Modal';
import Loader from '../Partials/Loader';
import {actions} from './store/actions';
import NoAccess from './auth/NoAccess';

const Header = lazy(() => import('../Partials/Header'));
const App = ({authentication, isUserLogin, messages}) => {
	useEffect(() => {
		authentication();
	}, []);
	const PublicRoute = () => {
		return (
			<Switch>
				{routes.map(({component: Component, path, ...rest}, index) => {
					if (path === '/user') {
						return <Route key={index} path={path} {...rest} render={(props) => (isUserLogin ? <Component {...props} /> : <NoAccess msg={messages} />)} />;
					}
					return <Route key={index} {...rest} path={path} render={(props) => <Component {...props} />} />;
				})}
			</Switch>
		);
	};
	// const PrivateRoute = ({component: Component, ...rest}, index) => {
	// 	return (
	// 		<Switch>
	// 			<Route key={index} {...rest} render={(props) => (isUserLoggedIn ? <Component {...props} /> : <Redirect to="/product/add" />)} />;
	// 		</Switch>
	// 	);
	// };
	return (
		<StateManager>
			<div id="wrapper" className="rtl">
				<div id="container">
					<Suspense fallback={<Loader />}>
						<Header />
					</Suspense>
					<SideBar />

					<Modal />

					<div class="dashboard-wrapper mt-3">
						<div class="dashboard-ecommerce ">
							<div class="container-fluid dashboard-content  ">
								{PublicRoute()}
								{/* <PrivateRoute component={Users} path="/user" exact /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</StateManager>
	);
};

const mapState = (state) => ({isUserLogin: state.users.userAuthenication.isUserLogin, messages: state.users.userAuthenication.messages});

const mapDispatch = (dispatch) => {
	return {
		authentication: (payload) => {
			dispatch({
				type: actions.AUTHENTICATION,
				payload: null,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(App);

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
