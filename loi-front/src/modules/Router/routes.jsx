import React from 'react';
import Products from '../Products';
import Courses from '../Courses';
import AddCourse from '../Courses/AddCourse';
import AddProduct from '../Products/AddProduct';
import User from '../User/Users';
import UserProfile from '../User/UserProfile';
import NotFound from '../../Partials/NotFound';
const routes = [
	{
		path: '/',
		exact: true,
		component: <>Products Courses</>,
	},
	{
		path: '/course',
		exact: true,
		component: Courses,
	},
	{
		path: '/product',
		exact: true,
		component: Products,
	},
	{
		path: '/course/add',
		exact: true,
		component: AddCourse,
	},
	{
		path: '/product/add',
		exact: true,
		component: AddProduct,
	},
	{
		path: '/user',
		exact: true,
		component: User,
	},
	{
		path: '/user/:id',
		exact: true,
		component: UserProfile,
	},
	{
		component: NotFound,
	},
];

export default routes;
