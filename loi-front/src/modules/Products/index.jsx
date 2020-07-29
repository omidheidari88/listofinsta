import React, {Component} from 'react';
import Item from './Item';
import NoItem from '../../Partials/Filter/NoItem';
import Filter from '../../Partials/Filter';

class Products extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			filter: 'all',
		};
	}
	check = (products) => {
		if (products.length > 0) {
			return products
				.filter((product) => {
					if (this.state.filter === 'all') return true;
					else {
						const filterType = this.state.filter === 'income' ? 2 : 1;
						return product.status === filterType;
					}
				})
				.map((product) => <Item {...product} />);
		}
		return <NoItem />;
	};
	filterHandler = (filter) => {
		this.setState((prev) => {
			return {
				...prev,
				filter,
			};
		});
	};
	titles = {
		all: 'همه',
		income: 'درآمد',
		cost: 'هزینه',
	};
	render() {
		const {products} = this.props;
		const renderProduct = this.check(products);
		return (
			<div className="row">
				<div className="col">
					<div className="card">
						{/* <div className="card-body">
							<div className="actions">
								<button onClick={(e) => render('addList')} className="btn btn-outline-success btn-icon m-l-5">
									<i className="material-icons">note_add</i>
									افزودن وظیفه
								</button>
							</div>
						</div> */}
						<Filter filtering={this.filterHandler} title={this.titles} />
						<div className="card-header">لیست محصولات</div>
						<div className="card-body">
							<table className="table table-bordered table-hover table-striped text-center">
								<thead>
									<tr>
										<th>ID</th>
										<th>دسته بندی</th>
										<th>قیمت</th>
										<th>تاریخ</th>
										<th>وضعیت</th>
										<th>عملیات</th>
									</tr>
								</thead>
								<tbody>{renderProduct}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Products;
