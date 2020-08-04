import React, {Component} from 'react';
import Item from './Item';
import NoItem from '../../Partials/Filter/NoItem';
import Filter from '../../Partials/Filter';
import FilterSign from '../../Partials/Filter/FilterSign';
import {list} from '../../Partials/style';
import Pagination from '../../Partials/Pagination';

class Products extends Component {
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
					if (this.state.filter === 'all' || this.state.filter === 'filter') return true;
					else {
						const filterType = this.state.filter === 'income' ? 2 : 1;
						return product.status === filterType;
					}
				})
				.map((product) => <Item {...product} />);
		}
		return <NoItem col="6" />;
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

	changeCurrentPage = (e, page) => {
		e.preventDefault();
		console.log(page);
	};
	THeadTitle = {
		id: {title: 'ID', clickable: true},
		category: {title: 'دسته بندی'},
		price: {title: 'قیمت'},
		date: {title: 'تاریخ'},
		status: {title: 'وضعیت'},
		opreation: {title: 'عملیات'},
	};

	render() {
		const {products} = this.props;
		const renderProduct = this.check(products);
		const showFilter = this.state.filter === 'filter' ? <Filter filtering={this.filterHandler} title={this.titles} /> : <FilterSign filtering={this.filterHandler} />;

		return (
			<div className="row">
				<div className="col">
					<div className="card" style={list}>
						{/* <div className="card-body">
							<div className="actions">
								<button onClick={(e) => render('addList')} className="btn btn-outline-success btn-icon m-l-5">
									<i className="material-icons">note_add</i>
									افزودن وظیفه
								</button>
							</div>
						</div> */}
						{showFilter}
						<div className="card-header">لیست محصولات</div>
						<div className="card-body">
							{/* generate table dynamicly */}
							{/* <Table theadData={this.THeadTitle} tbodyData={products} /> */}
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
							<br />
							<div>
								<Pagination totalPage={5} currentPage={1} changeCurrentPage={this.changeCurrentPage} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Products;
