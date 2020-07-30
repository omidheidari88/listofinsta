import React, {Component} from 'react';
import Products from './Products';
import Courses from './Courses';
import SideBar from './SideBar';
import AddCourse from './Courses/AddCourse';
import AddProduct from './Products/AddProduct';
import Axios from '../Ajax/Axios';
import Loader from '../Partials/Loader';
import Header from '../Partials/Header';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			productItems: [],
			courseItems: [],
			is_loading: false,
			type: 'all',
			filter: '',
		};
		this.axios = new Axios();
	}

	addProduct = (item) => {
		this.setState((prev) => {
			return {
				...prev,
				is_loading: true,
			};
		});
		this.axios
			.post('product/add', item)
			.then((res) => {
				this.setState((prev) => {
					return {
						...prev,
						items: [...prev.productItems, res.data.item],
					};
				});
			})
			.catch((err) => console.log(err))
			.finally(() => {
				this.setState((prev) => {
					return {
						...prev,
						is_loading: false,
					};
				});
			});
	};
	addCourse = (item) => {
		this.setState((prev) => {
			return {
				...prev,
				is_loading: true,
			};
		});
		this.axios
			.post('course/add', item)
			.then((res) => {
				console.log(res.data.item);
				this.setState((prev) => {
					return {
						...prev,
						items: [...prev.courseItems, res.data.item],
					};
				});
			})
			.catch((err) => console.log(err))
			.finally(() => {
				this.setState((prev) => {
					return {
						...prev,
						is_loading: false,
					};
				});
			});
	};

	componentHandler = (type) => {
		this.setState({type});
	};
	componentDidMount() {
		this.axios
			.get('product/add')
			.then((res) => {
				this.setState({
					productItems: res.data.items,
				});
			})
			.catch((err) => console.log(err));
		this.axios
			.get('course/add')
			.then((res) => {
				this.setState({
					courseItems: res.data.items,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const loading = this.state.is_loading ? <Loader /> : null;
		const components = () => {
			switch (this.state.type) {
				case 'addCourse':
					return <AddCourse item={this.addCourse} />;
				case 'addProduct':
					return <AddProduct item={this.addProduct} />;
				case 'product':
					return <Products products={this.state.productItems} />;
				case 'course':
					return <Courses courses={this.state.courseItems} />;
				case 'all':
					return (
						<React.Fragment>
							<Products products={this.state.productItems} />
							<Courses courses={this.state.courseItems} />
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
					<SideBar render={this.componentHandler} />
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
	}
}

export default App;

//\\ bind in ES2015
// this.componentHandler = this.componentHandler.bind(this);

//\\ component choose with object key
// const components = {
// 	add: <Add productsItem={this.addProduct} />,
// 	list: <products products={this.state.productItems} />,
// 	course: <Courses />,
// };
// if (type in components) {
// this.setState({currenComponent: components[type]});
// }

//\\ dar vc tozih dadam
// . export class App extends React.PureComponent
// . componentDidUpdate(prevProps, prevState) {
// 	 if (prevState.productItems.length < this.state.productItems.length) {
// 		console.log('is less');
// 	  }
//   }
