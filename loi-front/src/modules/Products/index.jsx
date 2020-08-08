import React, {useContext, useEffect} from 'react';
import Item from './Item';
import NoItem from '../../Partials/Filter/NoItem';
import Filter from '../../Partials/Filter';
import FilterSign from '../../Partials/Filter/FilterSign';
import {list} from '../../Partials/style';
import Pagination from '../../Partials/Pagination';
import {StateContext} from '../store/ContextManager';

const Products = () => {
	const [state, dispatch] = useContext(StateContext);
	const filter = 'all';
	const filterHandler = (filter) => {};
	const titles = {
		all: 'همه',
		income: 'درآمد',
		cost: 'هزینه',
	};
	const changeCurrentPage = (e, page) => {
		e.preventDefault();
	};
	const THeadTitle = {
		id: {title: 'ID', clickable: true},
		category: {title: 'دسته بندی'},
		price: {title: 'قیمت'},
		date: {title: 'تاریخ'},
		status: {title: 'وضعیت'},
		opreation: {title: 'عملیات'},
	};

	const showFilter = filter === 'filter' ? <Filter filtering={filterHandler} title={titles} /> : <FilterSign filtering={filterHandler} />;
	const renderItems = state.items.length > 0 ? state.items.map((product) => <Item {...product} />) : <NoItem col="6" />;
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
						{/* <Table theadData={THeadTitle} tbodyData={products} /> */}
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
							<tbody>{renderItems}</tbody>
						</table>
						<br />
						<div>
							<Pagination totalPage={5} currentPage={1} changeCurrentPage={changeCurrentPage} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Products;
