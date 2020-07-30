import React, {Component} from 'react';
import Item from './Item';
import NoItem from '../../Partials/Filter/NoItem';
import Filter from '../../Partials/Filter';
import FilterSign from '../../Partials/Filter/FilterSign';
import {list} from '../../Partials/style';

export class Table2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: 'sign',
		};
	}
	check = (courses) => {
		if (courses.length > 0) {
			return (
				courses
					// .filter((course) => {
					// 	if (this.state.filter === 'all') return true;
					// 	else {
					// 		const filterType = this.state.filter === 'income' ? 2 : 1;
					// 		return course.status === filterType;
					// 	}
					// })
					.map((course) => <Item course={course} />)
			);
		}
		return <NoItem col="8" />;
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
		const {courses} = this.props;
		const renderCourses = this.check(courses);
		const showFilter = this.state.filter === 'filter' ? <Filter filtering={this.filterHandler} title={this.titles} /> : <FilterSign filtering={this.filterHandler} />;
		return (
			<div className="row">
				<div className="col">
					<div className="card" style={list}>
						{showFilter}
						{/* <div className="card-body">
							<div className="actions">
								<button onClick={(e) => render('addCourse')} className="btn btn-outline-success btn-icon m-l-5">
									<i className="material-icons">note_add</i>
									افزودن دوره
								</button>
							</div>
						</div> */}
						<div className="card-header">دوره های شما</div>
						<div className="card-body">
							<table className="table table-bordered table-hover table-striped text-center">
								<thead>
									<tr>
										<th>نام دوره</th>
										<th>نوع دوره</th>
										<th>قیمت</th>
										<th>عکس</th>
										<th>توضیحات</th>
										<th>زمان</th>
										<th>برچسب</th>
										<th>عملیات</th>
									</tr>
								</thead>
								<tbody>{renderCourses}</tbody>
							</table>
							{/* if( courses[0]!=undefined ||courses[0]!=undefined){  */}
							<table className="table table-bordered table-hover table-striped text-center">
								<tbody>
									<tr>
										<th>قیمت کل دوره ها</th>
										{/* <td>=price</td> */}
										<th>زمان کل دوره ها</th>
										{/* <td>=courses[0].total_time</td> */}
										<td>تعداد دوره ها</td>
										{/* <td>=courses[0].total_course</td> */}
									</tr>
								</tbody>
							</table>
							{/* // } */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Table2;
