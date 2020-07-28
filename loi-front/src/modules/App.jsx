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
			items: [],
			is_loading: false,
			type: 'all',
			filter: '',
		};
		this.axios = new Axios();
	}

	addItem = (item) => {
		this.setState((prev) => {
			return {
				...prev,
				is_loading: true,
			};
		});
		this.axios
			.post('http://localhost:5000/products/add', item)
			.then((res) => {
				this.setState((prev) => {
					return {
						...prev,
						items: [...prev.items, res.data.item],
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
			.get('http://localhost:5000/products/add')
			.then((res) => {
				this.setState({
					items: res.data.items,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const loading = this.state.is_loading ? <Loader /> : null;
		const components = () => {
			switch (this.state.type) {
				case 'addCourse':
					return <AddCourse />;
				case 'addProduct':
					return <AddProduct item={this.addItem} />;
				case 'product':
					return <Products products={this.state.items} />;
				case 'course':
					return <Courses />;
				case 'all':
					return (
						<React.Fragment>
							<Products products={this.state.items} />
							<Courses />
						</React.Fragment>
					);
				default:
					break;
			}
		};
		return (
			<div id="wrapper" className="rtl">
				<div id="container">
					<Header render={this.componentHandler} />
					<SideBar render={this.componentHandler} />
					<div class="dashboard-wrapper mt-5">
						<div class="dashboard-ecommerce">
							<div class="container-fluid dashboard-content ">
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
// 	add: <Add productsItem={this.addItem} />,
// 	list: <products products={this.state.items} />,
// 	course: <Courses />,
// };
// if (type in components) {
// this.setState({currenComponent: components[type]});
// }

//\\ dar vc tozih dadam
// . export class App extends React.PureComponent
// . componentDidUpdate(prevProps, prevState) {
// 	 if (prevState.items.length < this.state.items.length) {
// 		console.log('is less');
// 	  }
//   }
