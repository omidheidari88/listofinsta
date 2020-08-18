import Dashboard from '../Dashboard';
import Products from '../Products';
import Courses from '../Courses';
import AddCourse from '../Courses/AddCourse';
import AddProduct from '../Products/AddProduct';
import User from '../User/Users';
import UserProfile from '../User/UserProfile';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../../Partials/NotFound';
import EditUserList from '../User/EditUser';
const routes = [
	{
		path: '/',
		exact: true,
		component: Dashboard,
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
		component: EditUserList,
	},
	{
		path: '/auth/register',
		component: Register,
	},
	{
		component: Login,
	},
	{
		component: NotFound,
	},
];

export default routes;
