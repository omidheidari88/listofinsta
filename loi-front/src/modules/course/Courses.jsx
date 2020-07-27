import React, {Component} from 'react';

export class Table2 extends Component {
	render() {
		const {render} = this.props;
		return (
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-body">
							<div className="actions">
								<button onClick={(e) => render('addCourse')} className="btn btn-outline-success btn-icon m-l-5">
									<i className="material-icons">note_add</i>
									افزودن دوره
								</button>
							</div>
						</div>
						<div className="card-header">دوره های شما</div>
						<div className="card-body">
							<table className="table table-bordered table-hover table-striped">
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
								<tbody>{/* courses.forEach((course)=>{ - include('courseItem', {course: course);  );  */}</tbody>
							</table>
							{/* if( courses[0]!=undefined ||courses[0]!=undefined){  */}
							<table className="table table-bordered table-hover table-striped">
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
