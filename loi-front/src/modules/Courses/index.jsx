import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../actions';
import Item from './Item';
import NoItem from '../../Partials/Filter/NoItem';
// import Filter from '../../Partials/Filter';
// import FilterSign from '../../Partials/Filter/FilterSign';
import {list} from '../../Partials/style';

export class Courses extends Component {
	componentDidMount() {
		return this.props.fetchCourse();
	}

	render() {
		const {courseState} = this.props;
		const renderCourses = courseState.length > 0 ? courseState.map((course) => <Item course={course} />) : <NoItem col="8" />;
		return (
			<div className="row">
				<div className="col">
					<div className="card" style={list}>
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapState = (state) => ({courseState: state.courses.items, messages: state.courses.messages, errorMessages: state.courses.errorMessages});

const mapDispatch = (dispatch) => {
	return {
		fetchCourse: (payload) => {
			dispatch({
				type: actions.FETCH_COURSE,
				payload,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(Courses);

//NOTE filter course
// .filter((course) => {
// 	if (this.state.filter === 'all') return true;
// 	else {
// 		console.log(course);
// 		const filterType = this.state.filter === 'vip' ? 2 : 1;
// 		return course.type === filterType;
// 	}
// })

// filterHandler = (filter) => {
// 	this.setState((prev) => {
// 		return {
// 			...prev,
// 			filter,
// 		};
// 	});
// };
// titles = {
// 	all: 'همه',
// 	income: 'درآمد',
// 	cost: 'هزینه',
// };

// const showFilter = this.state.filter === 'filter' ? <Filter filtering={this.filterHandler} title={this.titles} /> : <FilterSign filtering={this.filterHandler} />;
