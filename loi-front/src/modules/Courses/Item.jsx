import React, {Component} from 'react';

export class Item extends Component {
	imagesCheck = (images) => {
		if (images !== null || images !== undefined) {
			return <img src={images} style={{width: 70, height: 70}} alt="" />;
		}
	};
	render() {
		const {course} = this.props;

		return (
			<tr>
				<td>{course.title}</td>
				<td>
					{course.type === 'رایگان' ? <span className="badge badge-primary">رایگان</span> : <span className="badge badge-secondary">نقدی</span>}
					{/* if(course.type==='cash') 
					if(course.type==='vip') <span className="badge badge-info">اعضای ویژه</span> */}
				</td>
				<td>{course.price}</td>
				<td>{this.imagesCheck(course.images)}</td>
				<td>{course.descript}</td>
				<td>{course.time}</td>
				<td>{course.tags}</td>
				<td>
					<a href="admin/edit/{ course.course_id }">
						<i className="material-icons">edit</i>
					</a>
					<a href="admin">
						<i className="material-icons">add</i>
					</a>
					<a href="admin/delete/{ course.course_id }">
						<i className="material-icons">delete</i>
					</a>
				</td>
			</tr>
		);
	}
}

export default Item;
